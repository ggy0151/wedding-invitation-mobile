param(
  [string]$SourceDirectory = (Join-Path $PSScriptRoot '..\assets')
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$sourceRoot = (Resolve-Path $SourceDirectory).Path
$variants = @(
  @{ Directory = 'thumbs'; MaxEdge = 1200; Quality = 76L },
  @{ Directory = 'display'; MaxEdge = 2400; Quality = 84L }
)
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' } |
  Select-Object -First 1

function Set-ExifOrientation {
  param([System.Drawing.Image]$Image)

  if (-not ($Image.PropertyIdList -contains 0x0112)) { return }
  $orientation = $Image.GetPropertyItem(0x0112).Value[0]
  $rotation = switch ($orientation) {
    2 { [System.Drawing.RotateFlipType]::RotateNoneFlipX }
    3 { [System.Drawing.RotateFlipType]::Rotate180FlipNone }
    4 { [System.Drawing.RotateFlipType]::Rotate180FlipX }
    5 { [System.Drawing.RotateFlipType]::Rotate90FlipX }
    6 { [System.Drawing.RotateFlipType]::Rotate90FlipNone }
    7 { [System.Drawing.RotateFlipType]::Rotate270FlipX }
    8 { [System.Drawing.RotateFlipType]::Rotate270FlipNone }
    default { [System.Drawing.RotateFlipType]::RotateNoneFlipNone }
  }
  $Image.RotateFlip($rotation)
}

function Export-OptimizedJpeg {
  param(
    [System.Drawing.Image]$Source,
    [string]$Destination,
    [int]$MaxEdge,
    [long]$Quality
  )

  $scale = [Math]::Min(1.0, $MaxEdge / [double][Math]::Max($Source.Width, $Source.Height))
  $width = [int][Math]::Max(1.0, [Math]::Round($Source.Width * $scale))
  $height = [int][Math]::Max(1.0, [Math]::Round($Source.Height * $scale))
  $bitmap = New-Object System.Drawing.Bitmap($width, $height)
  $bitmap.SetResolution(72, 72)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)

  try {
    $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.DrawImage($Source, 0, 0, $width, $height)

    $encoderParameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
      [System.Drawing.Imaging.Encoder]::Quality,
      $Quality
    )
    $bitmap.Save($Destination, $jpegCodec, $encoderParameters)
  }
  finally {
    $graphics.Dispose()
    $bitmap.Dispose()
  }
}

$files = Get-ChildItem -LiteralPath $sourceRoot -File |
  Where-Object { $_.Extension -match '^\.(jpe?g)$' -and $_.Name -ne 'og-share.jpg' }

foreach ($variant in $variants) {
  $targetRoot = Join-Path $sourceRoot $variant.Directory
  New-Item -ItemType Directory -Force -Path $targetRoot | Out-Null

  foreach ($file in $files) {
    $destination = Join-Path $targetRoot $file.Name
    $image = [System.Drawing.Image]::FromFile($file.FullName)
    try {
      Set-ExifOrientation -Image $image
      Export-OptimizedJpeg -Source $image -Destination $destination -MaxEdge $variant.MaxEdge -Quality $variant.Quality
    }
    finally {
      $image.Dispose()
    }
  }
}

$originalBytes = ($files | Measure-Object Length -Sum).Sum
$optimizedFiles = Get-ChildItem -LiteralPath (Join-Path $sourceRoot 'thumbs'), (Join-Path $sourceRoot 'display') -File
$optimizedBytes = ($optimizedFiles | Measure-Object Length -Sum).Sum
Write-Host ("Optimized {0} originals: {1:N1} MB -> {2:N1} MB across two responsive variants" -f $files.Count, ($originalBytes / 1MB), ($optimizedBytes / 1MB))
