import {SCREEN_MAIN, SCREEN_GAMEPLAY} from './screens'
import updateCommon from './common'

const initial = {
  pause: false,
  question: false,
  score: {
    boxes: 0,
    stars: 0
  }
}

test('Клик по вопросику', () => {
  const ui = {
    screen: SCREEN_MAIN,
    common: initial
  }

  const input = {
    width: 1080,
    pageX: 102,
    pageY: 70,
    isMouseDown: true
  }

  expect(updateCommon(ui, input, 0, 0)).toEqual({
    ...initial, question: true
  })
})

test('Клик по паузе', () => {
  const ui = {
    screen: SCREEN_GAMEPLAY,
    common: initial
  }

  const input = {
    width: 1080,
    pageX: 102,
    pageY: 70,
    isMouseDown: true
  }

  expect(updateCommon(ui, input, 0, 0)).toEqual({
    ...initial, pause: true
  })
})

test('Клик по включенной паузе', () => {
  const ui = {
    screen: SCREEN_GAMEPLAY,
    common: {...initial, pause: true}
  }

  const input = {
    width: 1080,
    pageX: 102,
    pageY: 70,
    isMouseDown: true
  }

  expect(updateCommon(ui, input, 0, 0)).toEqual({
    ...initial, pause: false
  })

  expect(updateCommon(ui, {...input, isMouseDown: false}, 0, 0)).toEqual({
    ...initial, pause: true
  })
})

test('Добавление очков', () => {
  const ui = {
    screen: SCREEN_GAMEPLAY,
    common: {...initial, score: {boxes: 100, stars: 84}}
  }

  const input = {
    width: 1080,
    pageX: 102,
    pageY: 70,
    isMouseDown: false
  }

  expect(updateCommon(ui, input, 1, 1)).toEqual({
    ...initial, score: {boxes: 101, stars: 85}
  })
})
