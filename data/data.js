import Loki from 'lokijs'

let db = new Loki('loki.json')
let user = db.addCollection('user')

class DatabaseHandler {
  insertUserList (list) {
    list.forEach((element) => {
      user.insert(element)
    })
  }

  getUserById (id) {
    return user.find()
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
    })[0]
  }

  getAllUsers () {
    return user.find().map(e => {
      return { id: e.id, name: e.name}
    })
  }
}

module.exports = DatabaseHandler
