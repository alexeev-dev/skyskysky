import {SCREEN_GAMEPLAY, SCREEN_MAIN} from './screens'
import updateGameplay from './gameplay'

const initial = {
  left: false,
  right: false,
  score: 0
}

test('Клик воздействует на кнопки', () => {
  const ui = {
    screen: SCREEN_GAMEPLAY,
    gameplay: initial
  }

  const input = {
    width: 1080,
    pageX: 248,
    pageY: 930,
    isMouseDown: true
  }

  expect(updateGameplay(ui, input, 0)).toEqual({
    ...initial, left: true
  })

  expect(updateGameplay(ui, {...input, pageX: 780}, 0)).toEqual({
    ...initial, right: true
  })
})

test('Увеличение счетчика', () => {
  const ui = {
    screen: SCREEN_GAMEPLAY,
    gameplay: {...initial, score: 212}
  }

  const input = {
    width: 1080,
    pageX: 248,
    pageY: 930,
    isMouseDown: false
  }

  expect(updateGameplay(ui, input, 1)).toEqual({
    ...initial, score: 213
  })
})

test('Изменения работают только в геймплее', () => {
  const ui = {
    screen: SCREEN_MAIN,
    gameplay: initial
  }

  const input = {
    width: 1080,
    pageX: 248,
    pageY: 930,
    isMouseDown: true
  }

  expect(updateGameplay(ui, input, 1)).toBe(initial)
})
