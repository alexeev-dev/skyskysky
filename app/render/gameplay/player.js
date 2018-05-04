import {DIRECTION_LEFT, DIRECTION_RIGHT} from '../../reducers/gameplay/player'

function calcFrameIndex(frame, ratio, size) {
  return Math.floor(frame / ratio) % size
}

function frameOffset(iteration, isWalking) {
  if (isWalking) {
    return 130 + calcFrameIndex(iteration, 2, 5) * 130
  } else {
    return 0
  }
}

function spriteScale(frame, deathFrame, direction) {
  const scaleX = direction === DIRECTION_LEFT ? -1 : 1
  if (deathFrame === -1) {
    return [scaleX, 1]
  } else {
    if (frame - deathFrame < 10) {
      return [scaleX, 1 - (frame - deathFrame) / 10]
    } else {
      return [scaleX, 0]
    }
  }
}

function renderPlayer(ctx, {iteration, frame, stage, scroll}, images) {
  const {posx, posy, direction, isWalking, deathFrame} = stage.player
  const [scaleX, scaleY] = spriteScale(frame, deathFrame, direction)
  ctx.save()
  ctx.translate(posx, posy + scroll)
  ctx.scale(scaleX, scaleY)
  ctx.translate(-65, -130)
  ctx.drawImage(
    images['images/skins/skin-1.png'],
    frameOffset(iteration, isWalking), 0, 130, 130,
    0, 0, 130, 130
  )
  ctx.restore()
}

export default renderPlayer
