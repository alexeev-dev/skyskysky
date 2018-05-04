import updateMainScreen from './main'
import {SCREEN_MAIN, SCREEN_GAMEPLAY} from './screens'

const prevState = {
  addPerson: false,
  addPlace: false,
  choosePerson: false,
  choosePlace: false,
  challenge: false,
  play: false
}

test('Ничего не меняется, если экран отличен от главного', () => {
  const ui = {
    screen: SCREEN_GAMEPLAY,
    mainScreen: prevState
  }

  const input = {
    width: 1080,
    pageX: 45,
    pageY: 1050,
    isMouseDown: true
  }

  expect(updateMainScreen(ui, input)).toBe(prevState)
})

test('Клик на кнопку "добавить персонажа"', () => {
  const input = {width: 1080, pageX: 45, pageY: 1050, isMouseDown: true}
  const ui = {
    screen: SCREEN_MAIN,
    mainScreen: prevState
  }

  expect(updateMainScreen(ui, input)).toEqual({
    ...prevState, addPerson: true
  })
})

test('Клик на кнопку "добавить место"', () => {
  const input = {width: 1080, pageX: 1000, pageY: 1050, isMouseDown: true}
  const ui = {
    screen: SCREEN_MAIN,
    mainScreen: prevState
  }

  expect(updateMainScreen(ui, input)).toEqual({
    ...prevState, addPlace: true
  })

})

test('Клик в никуда', () => {
  const input = {width: 1080, pageX: 1000, pageY: 1160, isMouseDown: true}
  const ui = {
    screen: SCREEN_MAIN,
    mainScreen: prevState
  }

  expect(updateMainScreen(ui, input)).toEqual(prevState)
})

test('Отпускание кнопки', () => {
  const input = {width: 1080, pageX: 1000, pageY: 1160, isMouseDown: false}
  const ui = {
    screen: SCREEN_MAIN,
    mainScreen: {...prevState, addPlace: true}
  }

  expect(updateMainScreen(ui, input)).toEqual(prevState)
})
