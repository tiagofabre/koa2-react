import Koa from 'koa'
import rootRoutes from './routes/index'

const app = new Koa()

app.use(rootRoutes.routes())
app.use(rootRoutes.allowedMethods())

app.listen(3001, () => {
  console.log('Server running at http://localhost:3001')
})

export default app
