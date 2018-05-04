import {TOGGLE_PAUSE, START_GAMEPLAY} from '../../actions'
import {DIRECTION_RIGHT} from './player'
import updateStage from './stage'

export const gameplayInitial = {
  isGameOver: false,
  isRun: false,
  fell: 0,
  frame: 0,
  scroll: 0,
  picked: 0,
  iteration: 0,
  stage: {
    stars: [],
    boxes: [],
    player: {
      posx: 540,
      posy: 1585,
      isAlive: true,
      deathFrame: -1,
      isWalking: false,
      direction: DIRECTION_RIGHT
    },
    warning: [],
    ground: [1585, 1585, 1585, 1585, 1585, 1585, 1585, 1585]
  }
}

function isGameOver(frame, {deathFrame}) {
  if (deathFrame !== -1 && frame - deathFrame > 30) {
    return true
  } else {
    return false
  }
}

export function gameplayNext(state, input, deltaTime) {
  const delta = deltaTime / 16
  if (state.isRun && !state.isGameOver) {
    const frame = state.frame + delta
    const [stage, fell, picked] = updateStage(frame, state, input, delta)
    const level = stage.player.posy + state.scroll
    const scroll = level < 1200 ? (1200 - level) / 500 : 0
    return {
      frame,
      stage,
      fell, picked,
      isRun: state.isRun,
      iteration: state.iteration + 1,
      scroll: state.scroll + scroll * delta,
      isGameOver: isGameOver(frame, state.stage.player)
    }
  } else {
    return state
  }
}

function gameplayReducer(state, action) {
  switch (action.type) {
    case TOGGLE_PAUSE:
      return {...state, isRun: !state.isRun}
    case START_GAMEPLAY:
      return {...gameplayInitial, isRun: true}
    default:
      return state
  }
}

export default gameplayReducer
