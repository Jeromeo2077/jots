import { generateId } from "../utils/GenerateId.js"

export class Jots {
  constructor(data) {
    this.title = data.title
    this.color = data.color
    this.body = data.body || ''

    this.id = generateId()
    this.created = data.created == undefined ? new Date() : new Date(data.created)
    this.updated = data.updated == undefined ? new Date() : new Date(data.updated)
  }

  getJotTemplate() {
    return `
        <div onclick="app.JotsController.setActiveJot('${this.id}')" class="p-3 border border-2 border-dark mt-1 mb-1 rounded shadow-sm" role="button">
          <h3>${this.title}</h3>
          <p>${this.body.slice(0, 60)}</p>
          </div>`
  }


  getDetailedJotTemplate() {
    return `
    <divclass="p-3 border border-1 border-dark m-1 rounded">
       <h3 style="color: ${this.color}" >${this.title}</h3>
       <p>Created: ${this.created.toLocaleString()}</p>
       <p>Updated: ${this.updated.toLocaleString()}</p>
     <div class="form-floating">
      <!--FIXME add an onblur for saving the jot -->
       <textarea class="form-control" id="updatedbody" style="height: 50vh">${this.body}</textarea>
     </div>
    </div > `
  }
}