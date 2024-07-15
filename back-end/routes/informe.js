import express from 'express'
import { actualizarInforme, addInforme, getInforme } from '../controllers/informe'

const router = express.Router()

router.get('/',getInforme)
router.post('/',addInforme)
router.patch('/:id', actualizarInforme)

export default router