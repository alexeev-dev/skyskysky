const WARNING_BOX_TEXTURE = 'images/common/warning.png'

function renderWarning(ctx, {stage, frame}, images) {
  const subframe = (Math.floor(frame) + 100) % 180
  const opacity = (subframe < 30 ? subframe / 30
    : subframe > 149 ? 1 - (subframe - 149) / 30 : 1)
  ctx.save()
  ctx.globalAlpha = opacity
  stage.warning.forEach(hpos => {
    ctx.drawImage(
      images[WARNING_BOX_TEXTURE],
      64 + hpos * 119, 202
    )
  })
  ctx.restore()
}

export default renderWarning
