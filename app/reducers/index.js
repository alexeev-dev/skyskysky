import gameplayReducer, {gameplayNext, gameplayInitial} from './gameplay'
import uiReducer, {uiNext, uiInitial} from './ui'
import {
  LOAD_SCORE,
  SAVE_SCORE,
  NEXT_FRAME,
  SHOW_RESULT,
  ENTER_SCREEN,
  TOGGLE_PAUSE,
  START_GAMEPLAY
} from '../actions'

const initialState = {
  gameplay: gameplayInitial,
  ui: uiInitial
}

function calcNextFrame(state, delta, input) {
  const gameplay = gameplayNext(state.gameplay, input, delta)
  const ui = uiNext(state.ui, gameplay, input)
  return {gameplay, ui}
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_FRAME:
      const {delta, input} = action
      return calcNextFrame(state, delta, input)
    case LOAD_SCORE:
    case SAVE_SCORE:
    case SHOW_RESULT:
    case ENTER_SCREEN:
      return {...state, ui: uiReducer(state.ui, action)}
    case TOGGLE_PAUSE:
      return {...state, gameplay: gameplayReducer(state.gameplay, action)}
    case START_GAMEPLAY:
      return {
        ui: uiReducer(state.ui, action),
        gameplay: gameplayReducer(state.gameplay, action)
      }
    default:
      return state
  }
}

export default rootReducer
