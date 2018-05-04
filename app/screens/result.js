import {togglePause} from '../actions'
import Screen from './screen'

const close = [873, 726, 81, 83]
const ok = [336, 1166, 405, 124]

class ResultScreen extends Screen {
  constructor(store, trigger, input) {
    super(store, trigger, input)
    input.bind('result-screen', [
      [close, this.handleClose.bind(this)],
      [ok, this.handleOk.bind(this)]
    ])
  }

  handleClose() {
    console.log('Закрыть игру')
  }

  handleOk() {
    console.log('Продолжить играть')
  }
}

export default ResultScreen
