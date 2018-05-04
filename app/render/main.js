import renderCommon from './common'

const bgCtx = document.getElementById('bg').getContext('2d')
const fgCtx = document.getElementById('fg').getContext('2d')

const personBg = (isDown) => !isDown ?
  'images/intro/person-button.png' : 'images/intro/person-button-down.png'
const placeBg = (isDown) => !isDown ?
  'images/intro/place-button.png' : 'images/intro/place-button-down.png'
const personImg = (isDown) => !isDown ?
  'images/intro/add-person.png' : 'images/intro/add-person-down.png'
const placeImg = (isDown) => !isDown ?
  'images/intro/add-place.png' : 'images/intro/add-place-down.png'
const playOffset = (isDown) => isDown ? 352 : 0

function renderCenter(ctx, state, images) {
  const {addPerson, addPlace, choosePerson, choosePlace, play} = state
  ctx.drawImage(images[personBg(choosePerson)], 55, 917)
  ctx.drawImage(images[placeBg(choosePlace)], 619, 905)
  ctx.drawImage(images['images/intro/person-1.png'], 74, 872)
  ctx.drawImage(images['images/intro/summer.png'], 638, 863)
  ctx.drawImage(images[personImg(addPerson)], 20, 1027)
  ctx.drawImage(images[placeImg(addPlace)], 928, 1027)
  ctx.drawImage(
    images['images/intro/play.png'],
    playOffset(play), 0, 352, 341,
    361, 881, 352, 341
  )
}

function renderChallenge(ctx, isDown, images) {
  ctx.save()
  ctx.translate(276, 1244)
  ctx.drawImage(
    images['images/intro/challenge.png'],
    isDown ? 524 : 0, 0, 524, 201,
    0, 0, 524, 201
  )
  ctx.translate(0, isDown ? 10 : 0)
  ctx.font = 'bold 60px "Futura Round"'
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
  ctx.fillText('Friends', 85, 85)
  ctx.fillText('Challenge', 54, 149)
  ctx.fillStyle = 'rgba(255, 255, 255, 1)'
  ctx.fillText('Friends', 89, 80)
  ctx.fillText('Challenge', 58, 144)
  ctx.drawImage(images['images/intro/fb-logo.png'], 354, 27)
  ctx.restore()
}

function renderMain(ui, images) {
  bgCtx.drawImage(images['images/places/summer-bg.png'], 0, 0)
  bgCtx.drawImage(images['images/places/summer-ground.png'], 0, 1377)
  fgCtx.clearRect(0, 0, 1080, 1920)
  renderCommon(ui, images)
  fgCtx.drawImage(images['images/intro/shadow.png'], 91, 708)
  fgCtx.drawImage(images['images/intro/logo.png'], 15, 368)
  renderCenter(fgCtx, ui.mainScreen, images)
  renderChallenge(fgCtx, ui.mainScreen.challenge, images)
}

export default renderMain
