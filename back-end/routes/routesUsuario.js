import express from 'express'
import { agregarUsuario,
     obtenerUsuarios, 
     obtenerUsuario, 
     actualizarUsuario,
      deleteUsuario } from '../controllers/usuarios.js'

const routes = express.Router()
routes.post('/',agregarUsuario)
routes.get('/', obtenerUsuarios)
routes.get('/:id', obtenerUsuario)
routes.patch('/:id', actualizarUsuario)
routes.delete('/:id', deleteUsuario)
export default routes 