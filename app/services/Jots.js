export class {
  constructor(data) {
    this.title = data.title
    this.color = data.color
    this.body = data.body

    this.id = generateId()
    this.created = new Date()
    this.updated = data.updated == undefined ? new Date() : new Date(data.updated)
  }

}