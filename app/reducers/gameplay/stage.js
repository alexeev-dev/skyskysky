import updateGround from './ground'
import updatePlayer from './player'
import updateStars from './stars'
import moveBoxes from './boxes'
import {makeStar, nextBoxes, nextBoxPositions} from './generator'

const detectEdge = (edge, cycle) => {
  const cycled = frame => Math.floor(frame) % cycle
  return (frame, prevFrame) => (
    cycled(frame) >= edge && cycled(prevFrame) < edge
  )
}

const needBoxes = detectEdge(40, 180)
const needStar = detectEdge(50, 100)

function updateStage(frame, state, input, delta) {
  const [boxes, fell] = moveBoxes(state.stage, state.scroll, delta)
  const ground = updateGround(fell, state.stage.ground)
  const player = updatePlayer(boxes, ground, state, input, delta)
  const [stars, picked] = updateStars(player, ground, state)
  const warning = nextBoxPositions(Math.floor(frame) + 100)
  return [{
    player,
    ground,
    warning,
    stars: (needStar(frame, state.frame) ?
      stars.concat(makeStar(frame, ground)) : stars),
    boxes: (needBoxes(frame, state.frame) ?
      boxes.concat(nextBoxes(frame, state.scroll)) : boxes)
  }, fell.length, picked]
}

export default updateStage
