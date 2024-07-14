import Sondeo from '../models/sondeo.js'

export const agregarSondeo=async(req, res)=>{
    try {
        const body = req.body

        const sondeo = await Sondeo.create(body)
        return res.status(201).json({
            msg:"sondeo agregado correctamente",
            sondeo: sondeo
        })
    } catch (error) {
        console.log("ERROR", error )
    }
}
export const obtenerSondeos=async(req, res)=>{
    try {
        const sondeos =  await Sondeo.find({})
        return res.status(200).json(sondeos)
        
    } catch (error) {
        console.log("Hubo un error al momento de traer los sondeos")
    }
}
export const obtenerSondeo= async(req, res)=>{
    const {id}= req.params
    try{
const sondeo = await Sondeo.findById(id)
if(!sondeo) return res.status(400).send('sondeo no encontrado')
    res.status(200).json({sondeo: sondeo})
    }catch(error){
        console.log(" error", error)
    }
}
export const deleteSondeo=async(req, res)=>{
    const {id}= req.params 
    try{
const sondeo = await Sondeo.findByIdAndDelete(id)
if(!sondeo) return res.status(400).send('usuario no encontrado')
    res.status(200).send('sondeo eliminado')
    }catch(error){
        console.log("error", error)
    }
}
export const actualizarSondeo= async(req, res)=>{
    const {id}= req.params
    const body= req.body
    try{
const sondeo =await  Sondeo.findByIdAndUpdate(id, body)
if(!sondeo) return res.status(400).send('sondeo no encontrado')
    res.json({message: 'sondeo actualizado', sondeo: sondeo})
    }catch(error){
        console.log('error', error)
    }
}