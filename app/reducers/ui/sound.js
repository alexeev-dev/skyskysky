import {testButton} from './utils'

const menuButton = [917, 26, 100, 100]
const soundButton = [917, 154, 100, 100]
const musicButton = [917, 265, 100, 100]

function toggle(prev, button, input) {
  return testButton(button, input) ? !prev : prev
}

function updateSound(ui, input) {
  const {isOpen, sound, music} = ui.soundMenu
  return {
    isOpen: toggle(isOpen, menuButton, input),
    sound: isOpen ? toggle(sound, soundButton, input) : sound,
    music: isOpen ? toggle(music, musicButton, input) : music
  }
}

export default updateSound
