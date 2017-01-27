import Router from 'koa-router'
import Data from '../data/data'
import mock from '../data/mock'

const router = new Router()
const dbHandler = new Data()

dbHandler.deleteData()
dbHandler.insertUserList(mock)

router.get('/', (ctx) => {
  ctx.body = {'endpoints GET': ['/getUserById/:id', '/getAllUsers']}
})

router.get('/getUserById/:id', async ctx => {
  ctx.body = await dbHandler.getUserById(ctx.params.id)
})

router.get('/getAllUsers', async ctx => {
  ctx.body = await dbHandler.getAllUsers()
})

export default router
