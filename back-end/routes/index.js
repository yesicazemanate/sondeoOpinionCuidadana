import routeRol from './routesRol.js'
import express from 'express'
import routeUsuario from './routesUsuario.js'
import routeLogin from './login.js'
import routeSondeo from './routerSondeo.js'
import routePregunta from './pregunta.js'
import routeRespuesta from './respuesta.js'
import routeParticipante from './participante.js'
import routeCertificado from './cerficado.js'
import path from 'path'
import router from './routesRol.js'



const routes = express()
routes.use(express.urlencoded({extended:false}))
const __dirname = path.dirname(new URL(import.meta.url).pathname);
routes.use('/rol', routeRol)
routes.use('/usuario', routeUsuario)
routes.use('/login', routeLogin)
router.use('/pregunta', routePregunta)
router.use('/respuestausuario', routeRespuesta)
router.use('/participante', routeParticipante)
router.use('/certificados', routeCertificado)

routes.use('/sondeos',express.static(path.join(__dirname,'imagenes')), routeSondeo)
 export default routes