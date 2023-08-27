import * as el from './elements.js'
import * as actions from './actions.js'
import { updateDisplay } from './timer.js'
import * as sounds from './sounds.js'

let prvsBtn = el.rain
let prvsMode = 'rain'

el.modes.addEventListener('click', (element) => {
  let action = element.target.dataset.mode
  let button = element.target
  
  if(typeof actions[action] != 'function') {
    return
  }
  actions[action]()
  prvsBtn.classList.remove('secondary')
  prvsBtn = button
  button.classList.add('secondary')
  if(prvsMode != action) {
    document.documentElement.classList.remove(prvsMode)  
  }
  prvsMode = action
})

el.controls.addEventListener('click', (element) => {
  let action = element.target.dataset.action
  actions[action]()
})

updateDisplay()