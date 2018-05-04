import GameInput from './input'

function load(images, progress) {
  return new Promise((resolve, reject) => {
    const total = images.length
    const loaded = {}

    let current = 0

    function onLoad(src, image) {
      current++
      loaded[src] = image
      if (typeof progress === 'function') {
        progress((current / total) * 100)
      }
      if (current === total) {
        resolve(loaded)
      }
    }

    images.forEach(function (src) {
      const image = new Image()
      image.addEventListener('load', function () {
        onLoad(src, image)
      })
      image.src = src
    })
  })
}

const requestAnimationFrame = (
  window.requestAnimationFrame || window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
)

class Game {
  constructor(store) {
    this.events = {}
    this.store = store
    this.input = new GameInput()
    this.trigger = this.trigger.bind(this)
  }

  load(assets) {
    return load(assets, (progress) => {
      this.trigger('progress', progress)
    })
  }

  next() {
    this.lastTime = Date.now()
    requestAnimationFrame(() => {
      this.loop(Date.now() - this.lastTime)
      this.next()
    })
  }

  run() {
    this.next()
  }

  trigger(event, data) {
    if (typeof this.events[event] !== 'undefined') {
      this.events[event].forEach((callback) => {
        if (typeof callback === 'function') {
          callback(data)
        }
      })
    }
  }
}

export default Game
