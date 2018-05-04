const STAR_TEXTURE = 'images/common/star.png'

function calcOpacity(birthFrame, pickFrame, frame) {
  if (pickFrame !== -1) {
    const remain = frame - pickFrame
    return remain > 30 ? 0 : 1 - remain / 30
  } else {
    const remain = (birthFrame + 200) - frame
    return remain > 30 ? 1 : remain / 30
  }
}

function calcScale(pickFrame, frame) {
  if (pickFrame !== -1) {
    const remain = frame - pickFrame
    return remain > 30 ? 3 : 1 + remain / 15
  } else {
    return 1
  }
}

function renderStars(ctx, {stage, scroll, frame}, images) {
  stage.stars.forEach(star => {
    const {hpos, vpos, birthFrame, pickFrame} = star
    const scale = calcScale(pickFrame, frame)
    ctx.save()
    ctx.translate(124 + hpos * 119, vpos + scroll - 10)
    ctx.scale(scale, scale)
    ctx.translate(-37, -71)
    ctx.globalAlpha = calcOpacity(birthFrame, pickFrame, frame)
    ctx.drawImage(images[STAR_TEXTURE], 0, 0)
    ctx.restore()
  })
}

export default renderStars
