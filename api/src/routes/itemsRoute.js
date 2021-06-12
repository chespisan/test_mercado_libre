import { Router } from 'express'
import { itemSearch } from '@controllers/itemSearchController'
import { itemDescription } from '@controllers/itemDescriptionController'

const itemRouting = Router()

itemRouting.get('/api/items', itemSearch)
itemRouting.get('/api/items/:id', itemDescription)


export default itemRouting