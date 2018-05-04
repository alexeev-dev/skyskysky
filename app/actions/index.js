export const LOAD_SCORE = 'LOAD_SCORE'
export const SAVE_SCORE = 'SAVE_SCORE'
export const NEXT_FRAME = 'NEXT_FRAME'
export const SHOW_RESULT = 'SHOW_RESULT'
export const ENTER_SCREEN = 'ENTER_SCREEN'
export const TOGGLE_PAUSE = 'TOGGLE_PAUSE'
export const START_GAMEPLAY = 'START_GAMEPLAY'

export const loadScore = (score) => ({type: LOAD_SCORE, score})
export const saveScore = () => ({type: SAVE_SCORE})
export const nextFrame = (delta, input) => ({type: NEXT_FRAME, delta, input})
export const showResult = () => ({type: SHOW_RESULT})
export const enterScreen = (screen) => ({type: ENTER_SCREEN, screen})
export const togglePause = () => ({type: TOGGLE_PAUSE})
export const startGameplay = () => ({type: START_GAMEPLAY})
