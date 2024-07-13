import routeRol from './routesRol.js'
import express from 'express'
import routeUsuario from './routesUsuario.js'
import routeLogin from './login.js'
const routes = express()
routes.use('/rol', routeRol)
routes.use('/usuario', routeUsuario)
routes.use('/login', routeLogin)
 export default routes