import {testButton} from './utils/button'

function getClientPos(e) {
  const {pageX, pageY} = e.touches ? e.touches[0] : e
  return [pageX, pageY]
}

class GameInput {
  constructor() {
    const game = document.getElementById('game')
    this.width = document.body.clientWidth
    this.middle = this.width / 2

    this.current = 'default'
    this.contexts = {
      'default': []
    }

    this.state = {
      pageX: 0,
      pageY: 0,
      isLeftDown: false,
      isRightDown: false,
      isMouseDown: false
    }

    game.addEventListener('mousedown', this.handleMouseDown.bind(this))
    game.addEventListener('mouseup', this.handleMouseUp.bind(this))
    game.addEventListener('touchstart', this.handleMouseDown.bind(this), false)
    game.addEventListener('touchend', this.handleMouseUp.bind(this), false)
  }

  handleMouseDown(event) {
    const [pageX, pageY] = getClientPos(event)
    const {middle} = this
    this.state = {
      pageX, pageY,
      isMouseDown: true,
      isLeftDown: pageX < middle,
      isRightDown: pageX >= middle
    }
  }

  handleMouseUp(event) {
    const [pageX, pageY] = getClientPos(event)
    const newState = {
      pageX, pageY,
      isMouseDown: false,
      isLeftDown: false,
      isRightDown: false
    }
    this.testContext(this.state, newState)
    this.state = newState
  }

  switchContext(context) {
    this.current = context
  }

  testContext(prev, current) {
    if (typeof this.contexts[this.current] !== 'undefined') {
      const context = this.contexts[this.current]
      const {width} = this
      context.some(([button, handler]) => {
        if (testButton(prev, width, button) && testButton(current, width, button)) {
          if (typeof handler === 'function') {
            handler()
          }
          return true
        }
        return false
      })
    }
  }

  bind(context, handlers) {
    this.contexts[context] = handlers
  }

  getState() {
    return {
      ...this.state,
      width: this.width
    }
  }
}

export default GameInput
