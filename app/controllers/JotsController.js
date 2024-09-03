import { AppState } from "../AppState.js";
import { jotsService } from "../services/JotsService.js";
import { getFormData } from "../utils/FormHandler.js";

export class JotsController {
  constructor() {
    console.log('The JotsController has loaded');
    AppState.on('jots', this.drawJots)
    AppState.on('activeJot', this.drawActiveJots)

    this.drawJots()
    this.drawNumberJots()
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


  drawNumberJots() {
    const jot = AppState.numberJots

    let jotNumberHTML = jot

    const jotNumberElm = document.getElementById('jotsnumber')
    // @ts-ignore
    jotNumberElm.innerText = jotNumberHTML
  }


  setActiveJot(jotId) {
    console.log("The following Jot ID has been sent by the JotsController: ", jotId);
    jotsService.setActiveJot(jotId)
  }


  createJot() {
    // @ts-ignore
    event.preventDefault()
    console.log('Jot Form Submitted');
    // @ts-ignore
    const jotForm = event.target
    const jotFormData = getFormData(jotForm)
    console.log('Jot Form Data', jotFormData);
    jotsService.createJot(jotFormData)
  }

}