import Combinatorics from 'js-combinatorics'

const boxesPattern = [
  [0, 1, 4],
  [1, 2, 5, 7],
  [0, 2, 3, 6],
  [3, 4, 6],
  [5, 7]
]

function makeRandomPermutation(permutations) {
  const randomIndexes = []
  const max = permutations.length
  for (let i = 0; i < max; i++) {
    randomIndexes.push([Math.random(), permutations[i]])
  }
  return randomIndexes.sort((a, b) => a[0] < b[0] ? -1 : 1)
    .map(([i, val]) => val)
}

let boxPerm = Combinatorics.permutation([0, 1, 2, 3, 4])
let starPerm = Combinatorics.permutation([6, 3, 2, 1, 7, 5, 0, 4])

let boxPermCurrent = makeRandomPermutation(boxPerm.toArray())
let starPermCurrent = starPerm.next()

function makeBox(hpos, scroll) {
  return {
    hpos,
    vpos: 319 - scroll,
    speed: 50,
    isFly: true
  }
}

export function makeStar(frame, ground) {
  const index = Math.floor(frame / 100) % 8
  const hpos = starPermCurrent[index]
  const newStar = {
    hpos,
    vpos: ground[hpos],
    birthFrame: frame,
    pickFrame: -1
  }
  if (index === 7) {
    starPermCurrent = starPerm.next()
    if (starPermCurrent === undefined) {
      starPerm = Combinatorics.permutation([6, 3, 2, 1, 7, 5, 0, 4])
      starPermCurrent = starPerm.next()
    }
  }
  return newStar
}

function makeBoxes(positions, scroll) {
  return positions.map(hpos => makeBox(hpos, scroll))
}

function patternIndex(frame, size) {
  return Math.floor(frame / 180) % size
}

function combination(frame) {
  const index = Math.floor(frame / 900) % 120
  return boxPermCurrent[index]
}

export function nextBoxPositions(frame, next = false) {
  const index = patternIndex(frame, 5)
  return boxesPattern[combination(frame)[index]]
}

export function nextBoxes(frame, scroll) {
  return makeBoxes(nextBoxPositions(frame), scroll)
}
