import { AppState } from "../AppState.js";
import { Jots } from "../models/Jots.js";
import { jotsService } from "../services/JotsService.js";

export class JotsController {
  constructor() {
    console.log('The JotsController has loaded');
    AppState.on('jots', this.drawJots)
    AppState.on('activeJot', this.drawActiveJots)

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


  drawActiveJots() {
    const jot = AppState.activeJot

    let jotsHTML = ''

    jotsHTML += jot.getDetailedJotTemplate()

    const jotElm = document.getElementById('jotsdetail')
    // @ts-ignore
    jotElm.innerHTML = jotsHTML
  }


  setActiveJot(jotId) {
    console.log("The following Jot ID has been sent by the JotsController: ", jotId);
    jotsService.setActiveJot(jotId)
  }

}