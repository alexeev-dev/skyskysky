import {SCREEN_GAMEPLAY} from '../reducers/ui/screens'
import {startGameplay, enterScreen} from '../actions'
import Screen from './screen'

const buttons = {
  addPerson: [40, 1037, 109, 113],
  addPlace: [950, 1037, 109, 113],
  choosePerson: [154, 896, 209, 220],
  choosePlace: [708, 896, 226, 220],
  challenge: [301, 1259, 480, 151],
  play: [411, 903, 253, 265]
}

class MainScreen extends Screen {
  constructor(store, trigger, input) {
    super(store, trigger, input)
    input.bind('main-screen', [
      [buttons.addPerson, this.handlePerson.bind(this)],
      [buttons.addPlace, this.handlePlace.bind(this)],
      [buttons.choosePerson, this.handlePerson.bind(this)],
      [buttons.choosePlace, this.handlePlace.bind(this)],
      [buttons.challenge, this.handleChallenge.bind(this)],
      [buttons.play, this.handlePlay.bind(this)]
    ])
  }

  handlePerson() {
    console.log('Choose person clicked')
  }

  handlePlace() {
    console.log('Choose place clicked')
  }

  handleChallenge() {
    this.trigger('challenge')
  }

  handlePlay() {
    console.log('clicked')
    this.dispatch(startGameplay())
    this.dispatch(enterScreen(SCREEN_GAMEPLAY))
    this.input.switchContext('gameplay-screen')
  }
}

export default MainScreen
