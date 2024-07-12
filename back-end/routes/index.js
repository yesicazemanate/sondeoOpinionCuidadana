import routeRol from './routesRol.js'
import express from 'express'
import routeUsuario from './routesUsuario.js'
const routes = express()
routes.use('/rol', routeRol)
routes.use('/usuario', routeUsuario)
 export default routes