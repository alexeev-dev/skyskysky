import {isInRect, mapToScreen} from './utils'

const rect = [50, 100, 100, 100]

test('Точка внутри успешно обнаруживается', () => {
  expect(isInRect(rect, [55, 195])).toBe(true)
  expect(isInRect(rect, [149, 150])).toBe(true)
})

test('Точка вне прямоугольника обнаруживается', () => {
  expect(isInRect(rect, [30, 195])).toBe(false)
  expect(isInRect(rect, [149, 50])).toBe(false)
  expect(isInRect(rect, [100, 250])).toBe(false)
})

test('Проекция координат на игровой экран', () => {
  expect(mapToScreen(50, 50, 1080)).toEqual([50, 50])
  expect(mapToScreen(100, 250, 320)).toEqual([338, 844])
})
