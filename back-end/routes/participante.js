import express from 'express'
import { actualizarParticipante, addParticipante, getParticipante, getParticipantes } from '../controllers/participantes.js'

const router = express.Router()

router.get('/',getParticipantes)
router.get('/:id', getParticipante)
router.post('/',addParticipante)
router.patch('/:id', actualizarParticipante)

export default router