import {SCREEN_GAMEPLAY} from './screens'
import {mapToScreen} from './utils'

function updateGameplay(ui, input, fell) {
  const {pageX, pageY, width, isMouseDown} = input
  const {score} = ui.gameplay
  if (ui.screen === SCREEN_GAMEPLAY) {
    return {
      left: isMouseDown && mapToScreen(pageX, pageY, width)[0] < 540,
      right: isMouseDown && mapToScreen(pageX, pageY, width)[0] >= 540,
      score: score + fell
    }
  } else {
    return ui.gameplay
  }
}

export default updateGameplay
