import { Router } from 'express'
import { categoryById } from '@controllers/categoryController'

const categoryRouting = Router()

categoryRouting.get('/api/category/:id', categoryById)


export default categoryRouting