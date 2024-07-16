import routeRol from './routesRol.js'
import express from 'express'
import routeUsuario from './routesUsuario.js'
import routeLogin from './login.js'
import routeSondeo from './routerSondeo.js'
import path from 'path'



const routes = express()
routes.use(express.urlencoded({extended:false}))
const __dirname = path.dirname(new URL(import.meta.url).pathname);
routes.use('/rol', routeRol)
routes.use('/usuario', routeUsuario)
routes.use('/login', routeLogin)
routes.use('/sondeos',express.static(path.join(__dirname,'imagenes')), routeSondeo)
 export default routes