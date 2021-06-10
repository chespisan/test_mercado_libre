import { Router } from 'express'
import { searchItems } from '../controllers/itemsController'

const itemRouting = Router()

itemRouting.get('/api/items', searchItems)

export default itemRouting