import { AppState } from "../AppState.js";
import { jotsService } from "../services/JotsService.js";

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
    // @ts-ignore
    jotElm.innerHTML = jotsHTML
  }

  setActiveJot(jotId) {
    console.log("The following Jot ID has been sent by the JotsController: ", jotId);
    jotsService.setActiveJot(jotId)

  }

}