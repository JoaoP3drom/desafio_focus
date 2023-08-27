import * as timer from "./timer.js"
import state from "./state.js"
import * as sounds from './sounds.js'

export function rain() {
  document.documentElement.classList.add('rain')
  sounds.rain.play()
}

export function florest() {
  document.documentElement.classList.add('florest')
  sounds.florest.play()
}

export function coffe() {
  document.documentElement.classList.add('coffe')
  sounds.coffe.play()
}

export function fire() {
  document.documentElement.classList.add('fire')
  sounds.fire.play()
}

export function play() {
  document.documentElement.classList.add('running')
  state.isRunning = true
  timer.countdown()
}

export function pause() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
}

export function plus() {
  if(state.minutes == 90) {
    return
  }
  state.minutes += 5
  timer.updateDisplay()
}

export function minus() {
  if(state.minutes == 0) {
    return
  }
  state.minutes -= 5
  timer.updateDisplay()
}
