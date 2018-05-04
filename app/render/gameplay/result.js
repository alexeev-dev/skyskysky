const ctx = document.getElementById('fg').getContext('2d')

function renderResult(ui, images) {
  ctx.save()
  ctx.translate(139, 758)
  ctx.drawImage(images['images/ui/result-bg.png'], 0, 0)
  ctx.font = 'bold italic 80px "Futura Round"'
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
  ctx.fillText('congratulations!', 82, 112)
  ctx.fillStyle = 'rgba(255, 255, 255, 1)'
  ctx.fillText('congratulations!', 85, 106)
  ctx.drawImage(
    images['images/ui/close.png'],
    ui.result.close ? 107 : 0, 0,
    107, 108, 721, -41, 107, 108
  )
  ctx.restore()
}

export default renderResult
