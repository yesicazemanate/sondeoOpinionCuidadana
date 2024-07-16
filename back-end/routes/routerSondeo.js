import { agregarSondeo, obtenerSondeos, obtenerSondeo, deleteSondeo, actualizarSondeo } from "../controllers/sondeo.js"
import express from 'express'


const router = express.Router()

router.use(express.urlencoded({ extended: true }))
router.post('/', agregarSondeo)
router.get('/', obtenerSondeos)
router.get('/:id', obtenerSondeo)
router.patch('/:id', actualizarSondeo)
router.delete('/:id', deleteSondeo)

export default router 