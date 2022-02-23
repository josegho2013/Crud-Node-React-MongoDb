import express from 'express'
// import { getAllPersonajes, getPersonaje, createPersonaje, updatePersonaje, deletePersonaje } from '../resolver/AnimeResolver.js'
import { getAllPersonajes } from '../resolver/AnimeResolver.js'
const router = express.Router()

router.get('/',  getAllPersonajes)
// router.get('/:id', getPersonaje)
// router.post('/', createPersonaje)
// router.put('/:id', updatePersonaje)
// router.delete('/:id', deletePersonaje)

export default router
