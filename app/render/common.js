import {SCREEN_GAMEPLAY} from '../reducers/ui/screens'

const ctx = document.getElementById('fg').getContext('2d')

function renderScore(score, images) {
  ctx.save()
  ctx.translate(216, 14)
  ctx.drawImage(images['images/ui/header.png'], 0, 0)
  ctx.translate(79, 35)
  ctx.drawImage(images['images/ui/header-box.png'], 0, 0)
  ctx.translate(91, 0)
  ctx.fillStyle = '#ffda00'
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)'
  ctx.lineWidth = 2
  ctx.font = 'bold italic 60px "Futura Round"'
  ctx.fillText(`${score.boxes}`, 0, 57)
  ctx.strokeText(`${score.boxes}`, 0, 57)
  ctx.translate(206, 0)
  ctx.drawImage(images['images/ui/header-star.png'], 0, -3)
  ctx.translate(98, 0)
  ctx.fillText(`${score.stars}`, 0, 57)
  ctx.strokeText(`${score.stars}`, 0, 57)
  ctx.restore()
}

const pauseImage = (screen, {question, pause}) => {
  if (screen !== SCREEN_GAMEPLAY) {
    return question ? 'images/ui/question-down.png' : 'images/ui/question.png'
  } else {
    return pause === 1 || pause === true ? 'images/ui/pause-down.png' : 'images/ui/pause.png'
  }
}

function renderPause(screen, common, images) {
  if (screen !== SCREEN_GAMEPLAY) {
    ctx.drawImage(images['images/ui/question.png'], 43, 13)
  } else {
    ctx.drawImage(images['images/ui/pause.png'], 43, 13)
  }
}

function renderCommon(ui, images) {
  const {screen, common} = ui
  ctx.drawImage(images[pauseImage(screen, common)], 43, 13)
  renderScore(common.score, images)
}

export default renderCommon
