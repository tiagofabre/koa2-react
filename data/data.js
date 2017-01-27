import Loki from 'lokijs'

let db = new Loki('loki.json')
let users = db.addCollection('user')

class DatabaseHandler {
  insertUserList (list) {
    list.forEach((element) => {
      users.insert(element)
    })
  }

  getUserById (id) {
    return users.find()
    .filter(e => {
      return e.id === parseInt(id)
    })
    .map(e => {
      return {
        id: e.id,
        username: e.username,
        name: e.name,
        credits: e.credits,
        logged: e.logged
      }
    })[0] || null
  }

  getAllUsers () {
    return users.find().map(e => {
      return { id: e.id, name: e.name }
    })
  }

  deleteData () {
    users.find().forEach(e => users.remove(e))
  }
}

module.exports = DatabaseHandler
