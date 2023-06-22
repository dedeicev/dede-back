import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/user'
import addressRoutes from './routes/address'
import customerRoutes from './routes/customer'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/users', userRoutes)
app.use('/addresses', addressRoutes)
app.use('/customers', customerRoutes)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
