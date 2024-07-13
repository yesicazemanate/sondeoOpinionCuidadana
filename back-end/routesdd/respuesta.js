import express from 'express'
import { actualizarRespuesta, addRespuesta, getRespuesta, getRespuestas } from '../controllerdd/respuesta'


const router = express.Router()

router.get('/',getRespuestas)
router.get('/:id', getRespuesta)
router.post('/',addRespuesta)
router.patch('/:id', actualizarRespuesta)

export default router