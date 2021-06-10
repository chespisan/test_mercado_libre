import dotenv from 'dotenv'
import express from 'express'

const app = express()
const port = process.env.PORT
dotenv.config()

app.get('/', (req, res) => {
  res.send('Hello Express')
})

app.listen(port, () => console.log(`server on port ${port}`))
