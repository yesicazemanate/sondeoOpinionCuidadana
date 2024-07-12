import {agregarRol, obtenerRol, borrarRol} from '../controllers/rol.js'
import express from 'express'

const router = express.Router()
router.post('/', agregarRol)
router.get('/', obtenerRol)
router.delete('/:id', borrarRol)
export default router 