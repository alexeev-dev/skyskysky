import {SCREEN_MAIN, SCREEN_GAMEPLAY} from './screens'
import {testButton, isInRect, mapToScreen} from './utils'

const button = [57, 26, 100, 100]

const nonclicked = (prev) => prev === 1 || prev === true
const clicked = (prev) => prev === false || prev === 1 ? 1 : 2

function detectPause(prev, screen, input) {
  if (screen === SCREEN_GAMEPLAY) {
    return testButton(button, input) ? clicked(prev) : nonclicked(prev)
  } else {
    return false
  }
}

function detectQuestion(screen, input) {
  if (screen !== SCREEN_GAMEPLAY) {
    return testButton(button, input)
  } else {
    return false
  }
}

function updateCommon(ui, input, fell, picked) {
  const {pause, score} = ui.common
  return {
    pause: detectPause(pause, ui.screen, input),
    question: detectQuestion(ui.screen, input),
    score: {
      boxes: score.boxes,
      stars: score.stars + picked
    }
  }
}

export default updateCommon
