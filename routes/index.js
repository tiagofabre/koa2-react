import Router from 'koa-router'
import Data from '../data/data'
import mock from '../data/mock'
const router = new Router()
const dbHandler = new Data()

dbHandler.insertUserList(mock)

router.get('/', (ctx) => {
  ctx.body = {'endpoints GET': ['/getUserById/:id', '/getAllUsers']}
})

router.get('/getUserById/:id', ctx => {
  ctx.body = dbHandler.getUserById(ctx.params.id)
})

router.get('/getAllUsers', ctx => {
  ctx.body = dbHandler.getAllUsers()
})

export default router
