import Usuarios from '../models/usuarios.js'
import { encrypt } from '../utils/bcrypt.js';

export const agregarUsuario = async (req, res) => {
    
    const {
        tipo_documento,
        numero_documento,
        nombres,
        apellidos,
        sexo,
        telefono_celular,
        telefono_fijo,
        correo_electronico,
        municipio,
        direccion,
        barrio_vereda,
        fecha_nacimiento,
        etnia,
        condicion_discapacidad,
        estrato_residencial,
        nivel_educativo,
        acceso_dispositivo,
        dispositivos,
        conectividad_internet,
        tipo_regimen_afiliacion,
        password,
        id_rol
    } = req.body;
    try {
        

        const checkIs = await Usuarios.findOne({ $or: [{ numero_documento }, { correo_electronico }] });
        if (checkIs) {
            return res.status(400).json({ message: 'Usuario ya existe' });
        }
const passwordHash = await encrypt(password)
        const usuario = new Usuarios({
            tipo_documento,
            numero_documento,
            nombres,
            apellidos,
            sexo,
            telefono_celular,
            telefono_fijo,
            correo_electronico,
            municipio,
            direccion,
            barrio_vereda,
            fecha_nacimiento,
            etnia,
            condicion_discapacidad,
            estrato_residencial,
            nivel_educativo,
            acceso_dispositivo,
            dispositivos,
            conectividad_internet,
            tipo_regimen_afiliacion,
            password : passwordHash,
            id_rol
        });

        const usuarioSave = await usuario.save();
        res.json(usuarioSave);
    } catch (error) {
        res.status(500).send(error);
    }
};
export const obtenerUsuarios= async(req, res)=>{
    try{
        const usuarios= await Usuarios.find({})
        if(!usuarios){
          return  res.status(400).send('usuarios no encontrados')
        }
        res.send({usuarios})
    }catch(error){
        res.status(500).send('error a obtener los usuarios', error)
    }
}

export const obtenerUsuario= async(req, res)=>{
    const {id}=req.params 
    try{
        const usuario= await Usuarios.findById(id)
        if(!usuario){
            return res.status(400).send('usuario no encontrado')
        }
        res.json({usuario: usuario})
    }catch(error){
       console.log(error)
        res.json({mesage:'error al encontrar el usuario', error: error})
    }
}
export const actualizarUsuario= async(req, res)=>{
  const {id}= req.params
  const data = req.body
  try{
    const dataUpdate= await Usuarios.findByIdAndUpdate(id, data )
    if(!dataUpdate){
        return res.status(400).send('usuario no encontrado')
    }
    res.json({message: 'usuario actualizado', usuario: dataUpdate})
  }catch(error){
    res.status(500).json({mesage:"erro al actualizar el usuario", error: error})
  }


}
export const deleteUsuario= async(req, res)=>{
    const {id}= req.params 
    try{
        const usuario= await Usuarios.findByIdAndDelete(id)
        if(!usuario){
            return res.status(400).send('usuario no encontrado')
        }
        
        res.json({message: 'usuario borrado correctamente'})
    }catch(error){
        res.json({mesage:'error al eliminar el usuario', error: error})
    }
}
