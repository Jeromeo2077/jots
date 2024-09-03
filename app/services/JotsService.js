import { AppState } from "../AppState.js";
import { Jots } from "../models/Jots.js";
import { saveState } from "../utils/Store.js";

class JotsService {

  createJot(rawJotData) {
    console.log('Jot Form Data received by JotsService', rawJotData);
    const jots = AppState.jots
    const newJot = new Jots(rawJotData)
    jots.push(newJot)
    console.log('Jot Form Data sent to Jots Array', newJot);


    this.saveJots()
  }


  saveJots() {
    saveState('jots', AppState.jots)
  }

  setActiveJot(jotId) {
    console.log("The following Jot ID has been received by the JotsService: ", jotId);

    const jots = AppState.jots

    const foundJot = jots.find(jots => jots.id == jotId)

    console.log("The following object has been set to active by the JotsService: ", foundJot);

    AppState.activeJot = foundJot

  }

}

export const jotsService = new JotsService