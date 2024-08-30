
import { Jots } from './models/Jots.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  /**@type {Jots[]}*/
  jots = [
    new Jots({
      title: 'HTML Tricks', color: 'Blue', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque modi pariatur repudiandae asperiores sunt illo nihil quisquam repellendus assumenda, deleniti iure optio soluta ad nemo, ratione, neque quae accusamu'
    }),
    new Jots({
      title: 'CSS Tips', color: 'Green', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dicta exercitationem deserunt ipsum. Ullam fugiat provident sint ratione doloremque illum sunt molestiae ut vero incidunt quo natus, omnis quasi fuga.'
    }),
    new Jots({
      title: 'MVC Model', color: 'Black', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate et cum earum minus distinctio voluptatum nam debitis quae exercitationem sapiente corporis suscipit voluptatibus, ea nobis modi, minima porro, nulla mollitia.'
    }),
  ]

  /**@type {Jot}*/
  activeJot = null

  numberJots = this.jots.length

}

export const AppState = createObservableProxy(new ObservableAppState())