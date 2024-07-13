import Usuarios from '../models/usuarios.js'
import { verified } from '../utils/bcrypt.js'
export const loginUsuario=async(req, res)=>{
    const{correo_electronico, password} = req.body
    try{
        const checkIs= await Usuarios.findOne({correo_electronico})
        console.log(checkIs)
        if(!checkIs)  return res.status(401).json({ message: 'Usuario y/o contraseña incorrectos' });
        const passwordHash= checkIs.password
        const isCorrect = await verified(password, passwordHash)
        if(!isCorrect)  return res.status(401).json({ message: 'Usuario y/o contraseña incorrectos' });
        res.json({usario: checkIs})
    }catch(error){
        console.log(error)
        res.status(500).json({ message: 'Error del servidor', error: error.message });
       
}
}