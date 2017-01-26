import Loki from 'lokijs'

let db = new Loki('loki.json')
let user = db.addCollection('user')

class DatabaseHandler {
  insertDefaultUsers () {
    user.insert({ id: 0, 'username': 'Elayne', 'name': 'Elayne', 'credits': 200, 'logged': false })
    user.insert({ id: 1, 'username': 'Maria', 'name': 'Maria', 'credits': 300, 'logged': false })
    user.insert({ id: 2, 'username': 'Lara', 'name': 'Lara', 'credits': 400, 'logged': false })
    user.insert({ id: 3, 'username': 'Dorthea', 'name': 'Dorthea', 'credits': 500, 'logged': false })
    user.insert({ id: 4, 'username': 'Federica', 'name': 'Federica', 'credits': 600, 'logged': false })
    user.insert({ id: 5, 'username': 'Cherish', 'name': 'Cherish', 'credits': 700, 'logged': false })
    user.insert({ id: 6, 'username': 'Madel', 'name': 'Madel', 'credits': 800, 'logged': false })
    user.insert({ id: 7, 'username': 'Madelon', 'name': 'Madelon', 'credits': 900, 'logged': false })
    user.insert({ id: 8, 'username': 'Emogene', 'name': 'Emogene', 'credits': 1000, 'logged': false })
    user.insert({ id: 9, 'username': 'Sarette', 'name': 'Sarette', 'credits': 1100, 'logged': false })
    user.insert({ id: 10, 'username': 'Caprice', 'name': 'Caprice', 'credits': 1200, 'logged': false })
    user.insert({ id: 11, 'username': 'Tester', 'name': 'Caprice', 'credits': 1200, 'logged': false })
  }

  getAllUsers () {
    return user.find()
  }
}

module.exports = DatabaseHandler
