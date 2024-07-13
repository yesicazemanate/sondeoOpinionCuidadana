import { loginUsuario } from "../controllers/login.js";
import express from 'express'

const router = express.Router()
router.post('/', loginUsuario)

export default router 