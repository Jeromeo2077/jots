import { AppState } from "../AppState.js";
import { Jots } from "../models/Jots.js";

class JotsService {

  createJot(rawJotData) {
    const jots = AppState.jots
    const newJot = new Jots(rawJotData)
    jots.push(newJot)

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