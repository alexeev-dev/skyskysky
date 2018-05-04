const GROUND_TEXTURE = 'images/places/summer-ground.png'

function renderGround(ctx, {scroll}, images) {
  const posy = 1377 + Math.floor(scroll)
  ctx.drawImage(images[GROUND_TEXTURE], 0, posy)
}

export default renderGround
