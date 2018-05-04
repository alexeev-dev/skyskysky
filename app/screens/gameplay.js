import {togglePause} from '../actions'
import Screen from './screen'

const pause = [56, 26, 100, 100]

class GameplayScreen extends Screen {
  constructor(store, trigger, input) {
    super(store, trigger, input)
    input.bind('gameplay-screen', [
      [pause, this.handlePause.bind(this)]
    ])
  }

  handlePause() {
    console.log('paused!')
    this.dispatch(togglePause())
  }
}

export default GameplayScreen
