import Router from 'koa-router'
import Data from '../data/data'

const router = new Router()
const dbHandler = new Data()

dbHandler.insertDefaultUsers()

router.get('/', (ctx) => {
  ctx.body = {'endpoints': ['/getUserById/:id', '/getAllUsers']}
})

router.get('/getUserById/:id', ctx => {
  ctx.body = [{ id: 0, 'username': 'Elayne', 'name': 'Elayne', 'credits': 200, 'logged': false }]
})

router.get('/getAllUsers', ctx => {
  ctx.body = dbHandler.getAllUsers()
})

export default router
