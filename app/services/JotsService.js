import { AppState } from "../AppState.js";
import { Jots } from "../models/Jots.js";
import { loadState, saveState } from "../utils/Store.js";

class JotsService {

  deleteJot(jotId) {
    const jots = AppState.jots

    const jotIndex = jots.findIndex(jot => jot.id == jotId)

    jots.splice(jotIndex, 1)

    this.saveJots()
  }

  createJot(rawJotData) {
    console.log('Jot Form Data received by JotsService', rawJotData);
    const jots = AppState.jots
    const newJot = new Jots(rawJotData)
    jots.push(newJot)
    console.log('Jot Form Data sent to Jots Array', newJot);

    this.saveJots()
  }


  loadJots() {
    const jotsFromLocalStorage = loadState('jots', [Jots])
    AppState.jots = jotsFromLocalStorage
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

  // TODO add a save Jot method
  // Update the jot body and the updaated properties

}

export const jotsService = new JotsService