import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/user'
import serviceTypeRoutes from './routes/serviceType'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/users', userRoutes)
app.use('/servicetype', serviceTypeRoutes)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
