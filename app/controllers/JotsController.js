import { AppState } from "../AppState.js";

export class JotsController {
  constructor() {
    console.log('The JotsController has loaded');

    this.drawJots()
  }

  drawJots() {
    const jots = AppState.jots

    let jotsHTML = ''

    jots.forEach(jot => jotsHTML += jot.getJotTemplate())

    const jotElm = document.getElementById('jotslist')
    jotElm.innerHTML = jotsHTML
  }

}