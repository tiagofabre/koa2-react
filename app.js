import Koa from 'koa'
import views from 'koa-views'
import serve from 'koa-static'
import rootRoutes from './routes/index'

const app = new Koa()

app.use(rootRoutes.routes())
app.use(rootRoutes.allowedMethods())

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})

export default app