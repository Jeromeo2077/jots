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
        <div class="p-3 border border-1 border-dark m-1 rounded">
          <h3>HTML Tricks</h3>
          <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <p>2. Voluptate non, porro suscipit aut temporibus</p>
          <p>3. vitae ipsam nam incidunt iste error ex recusandae.</p>
          </div>`
  }
}