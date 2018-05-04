import {SCREEN_GAMEPLAY, SCREEN_MAIN} from './screens'
import updateSound from './sound'

const initial = {
  isOpen: false,
  sound: true,
  music: true
}

test('Открытие и закрытие меню', () => {
  const ui = {
    screen: SCREEN_GAMEPLAY,
    soundMenu: initial
  }

  const uiOpen = {
    screen: SCREEN_GAMEPLAY,
    soundMenu: {...initial, isOpen: true}
  }

  const input = {
    width: 1080,
    pageX: 968,
    pageY: 81,
    isMouseDown: true
  }

  expect(updateSound(ui, input)).toEqual({
    ...initial, isOpen: true
  })

  expect(updateSound(uiOpen, input)).toEqual({
    ...initial, isOpen: false
  })
})

test('Клик по кнопкам, при закрытом меню', () => {
  const ui = {
    screen: SCREEN_GAMEPLAY,
    soundMenu: initial
  }

  const input = {
    width: 1080,
    pageX: 965,
    pageY: 194,
    isMouseDown: true
  }

  expect(updateSound(ui, input)).toEqual(initial)
  expect(updateSound(ui, {...input, pageY: 311})).toEqual(initial)
})

test('Клик по кнопкам, при открытом меню', () => {
  const ui = {
    screen: SCREEN_GAMEPLAY,
    soundMenu: {...initial, isOpen: true}
  }

  const input = {
    width: 1080,
    pageX: 965,
    pageY: 194,
    isMouseDown: true
  }

  expect(updateSound(ui, input)).toEqual({
    ...initial, isOpen: true, sound: false
  })

  expect(updateSound(ui, {...input, pageY: 311})).toEqual({
    ...initial, isOpen: true, music: false
  })
})
