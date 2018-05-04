import renderGround from './ground'
import renderBoxes from './boxes'
import renderStars from './stars'
import renderPlayer from './player'
import renderWarning from './warning'
import renderCommon from '../common'
import renderResult from './result'

const bgCtx = document.getElementById('bg').getContext('2d')
const fgCtx = document.getElementById('fg').getContext('2d')

function renderGameplay(state, images) {
  bgCtx.drawImage(images['images/places/summer-bg.png'], 0, 0)
  fgCtx.clearRect(0, 0, 1080, 1920)
  renderCommon(state.ui, images)
  renderGround(fgCtx, state.gameplay, images)
  renderBoxes(fgCtx, state.gameplay, images)
  renderPlayer(fgCtx, state.gameplay, images)
  renderStars(fgCtx, state.gameplay, images)
  renderWarning(fgCtx, state.gameplay, images)
  if (state.ui.result.isOpen) {
    renderResult(state.ui, images)
  }
}

export default renderGameplay
