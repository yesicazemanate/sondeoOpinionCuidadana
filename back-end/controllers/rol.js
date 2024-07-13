import Rol from '../models/rol.js'

 export const agregarRol= async(req, res)=>{
    try{
        const rol = Rol(req.body)
        const rolSave= await rol.save()
        res.json({
            message: 'rol guardado correctamente',
            rol : rolSave})
    }catch(error){
        console.log( ` error al guardar el rol : ${error}`)
    }
}
export const obtenerRol= async(req, res)=>{
    try{
        const rol = await Rol.find({})
        res.send({rol})
    }catch(error){
        res.status(500).send("error al obtener el rol")
        console.log(error)
    }
}
export const borrarRol= async(req,res)=>{
    const {id}= req.params
    try{
        const rol= await Rol.findByIdAndDelete(id)
        if(!rol){
            return res.status(400).json({message: 'rol no encontrado'})
        }
        res.json({message: ' rol borrado correctamente'})
    }catch(error){
        console.log(error)
    }
}
