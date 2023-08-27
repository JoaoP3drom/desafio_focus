import state from "./state.js";
import * as el from './elements.js'

export function updateDisplay(minutes, seconds) {
  el.minutes.textContent = String(state.minutes).padStart(2, '0')
  el.seconds.textContent = String(state.seconds).padStart(2, '0')
  }

export function countdown() {
  if(!state.isRunning) {
    return
  }
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  seconds--
  if(seconds < 0) {
    seconds = 59
    minutes--
  }
  if(minutes < 0) {
    return
  }
  state.minutes = minutes
  state.seconds = seconds
  updateDisplay()
  setTimeout(() => countdown(), 1000)
}