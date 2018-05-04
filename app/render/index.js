import {SCREEN_MAIN, SCREEN_GAMEPLAY} from '../reducers/ui/screens'
import renderGameplay from './gameplay'
import renderMain from './main'

const bgCtx = document.getElementById('bg').getContext('2d')

function renderFrame(state, images) {
  switch (state.ui.screen) {
    case SCREEN_MAIN:
      renderMain(state.ui, images)
      break
    case SCREEN_GAMEPLAY:
      renderGameplay(state, images)
      break
    default:
      return
  }
}

export default renderFrame
