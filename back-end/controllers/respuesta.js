import Respuesta from "../models/respuesta.js"
export const addRespuesta = async(req,res)=>{
    try {
        const body = req.body

        const respuesta = await Respuesta.create(body)
        return res.status(201).json({
            msg:"respuesta agregada correctamente",
            respuesta: respuesta
        })
    } catch (error) {
        console.log("ERROR")
    }
}

export const  getRespuestas = async(req, res)=>{
    try {
        const respuestas =  await Respuesta.find()
        return res.status(200).json(respuestas)
        } catch (error) {
        console.log("Hubo un error al momento de traer las respuestas")
    }
}

export const getRespuesta = async(req, res)=>{
    try {
        const {id} = req.params
        const respuestas = await Respuesta.findById(id)
        if(!respuestas){
            return res.status(403).json({msg:"No se encontro la respuestas"})
        }

        return res.status(201).json(respuestas)
    } catch (error) {
        console.log("Hubo un error al momento de obtener la respuesta")
    }
}


export const actualizarRespuesta = async (req, res)=>{
    try {
        const {id} = req.params
        const body = req.body
        const respuesta = await Respuesta.findOneAndUpdate( {
            _id:id},body,{
                new:true,
            })

        return res.status(201).json({
            msg:"actualizado correctamente",
            respuesta: respuesta
        })
    } catch (error) {
        console.log("hubo un error al alctualizar la respuesta")
    }
}