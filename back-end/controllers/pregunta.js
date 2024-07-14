import Pregunta from "../models/pregunta.js"

export const addPregunta = async(req,res)=>{
    try {
        const body = req.body

        const pregunta = await Pregunta.create(body)
        return res.status(201).json({
            msg:"pregunta agregada correctamente",
            pregunta: pregunta
        })
    } catch (error) {
        console.log("ERROR")
    }
}

export const  getPreguntas = async(req, res)=>{
    try {
        const preguntas =  await Pregunta.find()
        return res.status(200).json(preguntas)
        } catch (error) {
        console.log("Hubo un error al momento de traer las preguntas")
    }
}

export const getPregunta = async(req, res)=>{
    try {
        const {id} = req.params
        const pregunta = await Pregunta.findById(id)
        if(!pregunta){
            return res.status(403).json({msg:"No se encontro la pregunta"})
        }

        return res.status(201).json(pregunta)
    } catch (error) {
        console.log("Hubo un error al momento de obtener la pregunta")
    }
}


export const actualizarPregunta = async (req, res)=>{
    try {
        const {id} = req.params
        const body = req.body
        const pregunta = await Pregunta.findOneAndUpdate( {
            _id:id},body,{
                new:true,
            })

        return res.status(201).json({
            msg:"actualizado correctamente",
            pregunta: pregunta
        })
    } catch (error) {
        console.log("hubo un error al alctualizar la pregunta")
    }
}