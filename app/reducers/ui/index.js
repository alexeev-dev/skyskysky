import {SCREEN_MAIN} from './screens'
import updateMainScreen from './main'
import updateCommon from './common'
import updateGameplay from './gameplay'
import updateSound from './sound'
import updateResult from './result'
import {
  LOAD_SCORE,
  SAVE_SCORE,
  NEXT_FRAME,
  SHOW_RESULT,
  ENTER_SCREEN,
  TOGGLE_PAUSE,
  START_GAMEPLAY
} from '../../actions'

export const uiInitial = {
  screen: SCREEN_MAIN,
  mainScreen: {
    addPerson: false,
    addPlace: false,
    choosePerson: false,
    choosePlace: false,
    challenge: false,
    play: false
  },
  common: {
    pause: false,
    question: false,
    score: {
      boxes: 0,
      stars: 0
    }
  },
  gameplay: {
    left: false,
    right: false,
    score: 0
  },
  soundMenu: {
    isOpen: false,
    sound: true,
    music: true
  },
  result: {
    isOpen: false,
    close: false,
    continue: false
  }
}

export function uiNext(ui, {fell, picked}, input) {
  return {
    screen: ui.screen,
    mainScreen: updateMainScreen(ui, input),
    common: updateCommon(ui, input, fell, picked),
    gameplay: updateGameplay(ui, input, fell),
    soundMenu: updateSound(ui, input),
    result: updateResult(ui, input)
  }
}

function maxScore({common, gameplay}) {
  return {
    stars: common.score.stars,
    boxes: Math.max(common.score.boxes, gameplay.score)
  }
}

function uiReducer(state, action) {
  switch (action.type) {
    case LOAD_SCORE:
      return {
        ...state,
        common: {...state.common, score: action.score}
      }
    case SAVE_SCORE:
      return {
        ...state,
        common: {...state.common, score: maxScore(state)}
      }
    case SHOW_RESULT:
      return {
        ...state, result: {...state.result, isOpen: true}
      }
    case ENTER_SCREEN:
      return {
        ...state, screen: action.screen
      }
    case START_GAMEPLAY:
      return {
        ...state,
        gameplay: {
          left: false,
          right: false,
          score: 0
        }
      }
    default:
      return state
  }
}

export default uiReducer
