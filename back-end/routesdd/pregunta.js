import express from 'express'
import { actualizarPregunta, addPregunta, getPregunta, getPreguntas } from '../controllerdd/pregunta'

const router = express.Router()

router.get('/',getPreguntas)
router.get('/:id', getPregunta)
router.post('/',addPregunta)
router.patch('/:id', actualizarPregunta)

export default router