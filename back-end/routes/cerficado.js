import express from 'express'
import { actualizarCertificado, addCerticado, getCerticados } from '../controllers/certificado'
const router = express.Router()

router.get('/',getCerticados)
router.post('/',addCerticado)
router.patch('/:id', actualizarCertificado)

export default router