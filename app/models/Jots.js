import { generateId } from "../utils/GenerateId.js"

export class Jots {
  constructor(data) {
    this.title = data.title
    this.color = data.color
    this.body = data.body

    this.id = generateId()
    this.created = new Date()
    this.updated = data.updated == undefined ? new Date() : new Date(data.updated)
  }

  getJotTemplate() {
    return `
        <div onclick="app.JotsController.setActiveJot('${this.id}')" class="p-3 border border-1 border-dark mt-1 mb-1 rounded shadow-sm" role="button">
          <h3>${this.title}</h3>
          <p>${this.body}</p>
          </div>`
  }


  getDetailedJotTemplate() {
    return `
    <div class="p-3 border border-1 border-dark m-1 rounded">
    <h3>${this.title}</h3>
       <p>${this.body}</p>
  </div>`
  }
}