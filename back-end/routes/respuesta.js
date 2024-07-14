import express from 'express'
import { actualizarRespuesta, addRespuesta, getRespuesta, getRespuestas } from '../controllers/respuesta.js'


const router = express.Router()

router.get('/',getRespuestas)
router.get('/:id', getRespuesta)
router.post('/',addRespuesta)
router.patch('/:id', actualizarRespuesta)

export default router