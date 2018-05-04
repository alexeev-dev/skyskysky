import {testButton} from './utils'

const close = [873, 726, 81, 83]
const ok = [336, 1166, 405, 124]

function updateResult(ui, input) {
  const {isOpen} = ui.result
  return {
    isOpen,
    close: isOpen ? testButton(close, input) : false,
    continue: isOpen ? testButton(ok, input) : false
  }
}

export default updateResult
