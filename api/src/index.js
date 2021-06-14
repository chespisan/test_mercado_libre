import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import itemRouting from 'routes/itemsRoute'
import categoryRouting from 'routes/categoryRoute'
dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(itemRouting)
app.use(categoryRouting)


app.listen(port, () => console.log(`server on port ${port}`))
