import {groundIndex} from './ground'

export const DIRECTION_LEFT = 'DIRECTION_LEFT'
export const DIRECTION_RIGHT = 'DIRECTION_RIGHT'

function isTooHighWall(posx, posy, ground) {
  return posy - ground[groundIndex(posx)] > 120
}

function calcPosX({posx, posy}, ground, input, coof) {
  if (input.isLeftDown) {
    const posxNext = posx - 15 * coof
    if (isTooHighWall(posxNext - 35, posy, ground) || posxNext < 99) {
      return posx
    } else {
      return posxNext
    }
  } else if (input.isRightDown) {
    const posxNext = posx + 15 * coof
    if (isTooHighWall(posxNext + 35, posy, ground) || posxNext > 981) {
      return posx
    } else {
      return posxNext
    }
  } else {
    return posx
  }
}

function calcPosY(posx, posy, ground) {
  const posyNext = Math.min(
    ground[groundIndex(posx + 35)],
    ground[groundIndex(posx - 35)],
    ground[groundIndex(posx)]
  )
  return posyNext - posy < 120 ? posyNext : posy
}

function calcDirection({isLeftDown, isRightDown}, direction) {
  return isLeftDown ? DIRECTION_LEFT : isRightDown ? DIRECTION_RIGHT : direction
}

function isPlayerMeetBox(posx, posy, box) {
  if (posy - box.vpos < 120) {
    const leftBorder = 64 + box.hpos * 119
    const rightBorder = leftBorder + 119
    const leftEdgeIn = leftBorder < (posx - 35) && (posx - 35) < rightBorder
    const rightEdgeIn = leftBorder < (posx + 35) && (posx + 35) < rightBorder
    return leftEdgeIn || rightEdgeIn
  } else {
    return false
  }
}

function isPlayerAlive(posx, posy, boxes) {
  const dangerBoxes = boxes.filter(box => box.isFly)
  return !dangerBoxes.some(box => isPlayerMeetBox(posx, posy, box))
}

function updatePlayer(boxes, ground, state, input, delta) {
  const {player} = state.stage
  if (player.isAlive) {
    const posx = calcPosX(player, ground, input, delta)
    const posy = calcPosY(posx, player.posy, ground)
    const isAlive = isPlayerAlive(posx, posy, boxes)
    return {
      posx,
      posy,
      isAlive,
      deathFrame: isAlive ? -1 : state.frame,
      isWalking: input.isLeftDown || input.isRightDown,
      direction: calcDirection(input, player.direction),
    }
  } else {
    return player
  }
}

export default updatePlayer
