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

}