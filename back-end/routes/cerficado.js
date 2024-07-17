import { actualizarCertificado, addCerticado, getCerticados } from '../controllers/certificado.js'
import express from 'express'

const router = express.Router()

router.get('/',getCerticados)
router.post('/',addCerticado)
router.patch('/:id', actualizarCertificado)

export default router