import {SCREEN_GAMEPLAY, SCREEN_MAIN} from './screens'
import updateResult from './result'

const initial = {
  isOpen: true,
  close: false,
  continue: false
}

test('Клик по кнопке "закрыть"', () => {
  const ui = {
    screen: SCREEN_GAMEPLAY,
    result: initial
  }

  const input = {
    width: 1080,
    pageX: 913,
    pageY: 768,
    isMouseDown: true
  }

  expect(updateResult(ui, input)).toEqual({
    ...initial, close: true
  })
})

test('Клик по кнопке "продолжить"', () => {
  const ui = {
    screen: SCREEN_GAMEPLAY,
    result: initial
  }

  const input = {
    width: 1080,
    pageX: 468,
    pageY: 1232,
    isMouseDown: true
  }

  expect(updateResult(ui, input)).toEqual({
    ...initial, continue: true
  })
})
