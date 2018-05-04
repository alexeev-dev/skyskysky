const BOX_TEXTURE = 'images/common/box.png'
const TRAIL_TEXTURE = 'images/common/trail.png'

function renderBox(ctx, box, scroll, images) {
  const {hpos, vpos, isFly} = box
  ctx.drawImage(images[BOX_TEXTURE], hpos * 119 + 64, vpos + scroll - 119)
  if (isFly) {
    ctx.drawImage(images[TRAIL_TEXTURE], hpos * 119 + 78, vpos + scroll - 797)
  }
}

function renderBoxes(ctx, {stage, scroll}, images) {
  stage.boxes.forEach(box => {
    renderBox(ctx, box, scroll, images)
  })
}

export default renderBoxes
