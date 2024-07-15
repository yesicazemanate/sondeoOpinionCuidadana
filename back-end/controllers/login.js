import Usuarios from '../models/usuarios.js'
import { verified } from '../utils/bcrypt.js'
import { generateToken } from '../utils/jwthandle.js'
export const loginUsuario=async(req, res)=>{
    const{correo_electronico, password} = req.body
    try{
        const checkIs= await Usuarios.findOne({correo_electronico})
        if(!checkIs)  return res.status(401).json({ message: 'Usuario y/o contraseña incorrectos' });
        const passwordHash= checkIs.password
        const isCorrect = await verified(password, passwordHash)
        if(!isCorrect)  return res.status(401).json({ message: 'Usuario y/o contraseña incorrectos' });
        const token = generateToken(checkIs._id)
        return res.json({token: token, data:checkIs})
    }catch(error){
        console.log(error)
        res.status(500).json({ message: 'Error del servidor', error: error.message });
       
}
}