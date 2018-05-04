export function groundIndex(posx) {
  return Math.min(Math.floor((posx - 64) / 119), 7)
}

function updateGround(fell, ground) {
  return fell.reduce(function (result, hpos) {
    result[hpos] -= 119
    return result
  }, ground.concat())
}

export default updateGround
