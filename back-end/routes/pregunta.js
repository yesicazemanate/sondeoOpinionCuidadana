import express from 'express'
import { actualizarPregunta, addPregunta, getPregunta, getPreguntas } from '../controllers/pregunta.js'

const router = express.Router()

router.get('/',getPreguntas)
router.get('/:id', getPregunta)
router.post('/',addPregunta)
router.patch('/:id', actualizarPregunta)

export default router