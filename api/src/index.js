import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import itemRouting from './routes/itemsRoute'
dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(morgan('dev'))
app.use(itemRouting)

app.listen(port, () => console.log(`server on port ${port}`))
