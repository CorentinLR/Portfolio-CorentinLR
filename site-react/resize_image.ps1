Add-Type -AssemblyName System.Drawing
$width = 800
$height = 1131
$src = [System.Drawing.Image]::FromFile("$PSScriptRoot\public\image\Affiche_SAE103.png")
$newImg = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($newImg)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($src, 0, 0, $width, $height)
$newImg.Save("$PSScriptRoot\public\image\Affiche_SAE103_thumb.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$src.Dispose()
$newImg.Dispose()
$g.Dispose()
