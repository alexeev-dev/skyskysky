import {nextFrame, showResult, saveScore} from './actions'
import GameplayScreen from './screens/gameplay'
import ResultScreen from './screens/result'
import MainScreen from './screens/main'
import renderFrame from './render'
import Game from './game'

const resources = [
  'images/places/summer-bg.png',
  'images/places/summer-ground.png',
  'images/intro/shadow.png',
  'images/intro/logo.png',
  'images/intro/play.png',
  'images/intro/person-button.png',
  'images/intro/person-button-down.png',
  'images/intro/place-button.png',
  'images/intro/place-button-down.png',
  'images/intro/person-1.png',
  'images/intro/person-2.png',
  'images/intro/person-3.png',
  'images/intro/person-4.png',
  'images/intro/person-5.png',
  'images/intro/person-6.png',
  'images/intro/person-7.png',
  'images/intro/person-8.png',
  'images/intro/person-9.png',
  'images/intro/person-10.png',
  'images/intro/summer.png',
  'images/intro/night.png',
  'images/intro/winter.png',
  'images/intro/add-person.png',
  'images/intro/add-person-down.png',
  'images/intro/add-place.png',
  'images/intro/add-place-down.png',
  'images/ui/close.png',
  'images/ui/header.png',
  'images/ui/header-box.png',
  'images/ui/header-star.png',
  'images/ui/pause.png',
  'images/ui/pause-down.png',
  'images/ui/question.png',
  'images/ui/question-down.png',
  'images/ui/sound.png',
  'images/ui/sound-down.png',
  'images/ui/sound-menu-bg.png',
  'images/ui/sound-off.png',
  'images/ui/sound-on.png',
  'images/ui/music-off.png',
  'images/ui/music-on.png',
  'images/ui/result-bg.png',
  'images/intro/fb-logo.png',
  'images/intro/challenge.png',
  'images/intro/challenge-down.png',
  'images/common/box.png',
  'images/common/star.png',
  'images/common/trail.png',
  'images/common/warning.png',
  'images/skins/skin-1.png'
]

const gameIsOver = ({ui, gameplay}) => !ui.result.isOpen && gameplay.isGameOver

class Skyscrapper extends Game {
  constructor(store) {
    super(store)
    this.screens = {
      'main-screen': new MainScreen(store, this.trigger, this.input),
      'result-screen': new ResultScreen(store, this.trigger, this.input),
      'gameplay-screen': new GameplayScreen(store, this.trigger, this.input)
    }
    this.events = {
      'start': [this.handleStart.bind(this)],
      'progress': [this.handleProgress.bind(this)],
      'gameover': [this.handleGameover.bind(this)]
    }
    this.handleProgress = this.handleProgress.bind(this)
  }

  init() {
    FBInstant.initializeAsync().then(() => {
      return this.load(resources, this.handleProgress)
    }).then((images) => {
      this.images = images
      this.trigger('start')
    })
  }

  loop(delta) {
    const {store, input, images} = this
    store.dispatch(nextFrame(delta, input.getState()))
    if (gameIsOver(store.getState())) {
      this.trigger('gameover')
    }
    renderFrame(store.getState(), images)
  }

  handleProgress(progress) {
    FBInstant.setLoadingProgress(progress)
  }

  handleStart() {
    FBInstant.startGameAsync().then(() => {
      this.input.switchContext('main-screen')
      this.run()      
    })
  }

  handleGameover() {
    const {dispatch} = this.store
    dispatch(saveScore())
    dispatch(showResult())
    this.input.switchContext('result-screen')
    console.log('Game over!')
  }

  handleContext() {
    console.log('Select FB Context')
  }
}

export default Skyscrapper
