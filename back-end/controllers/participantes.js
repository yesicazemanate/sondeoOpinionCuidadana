import Participantes from "../models/participante.js"

export const addParticipante = async(req,res)=>{
    try {
        const body = req.body

        const participante = await Participantes.create(body)
        return res.status(201).json({
            msg:"participante agregado correctamente",
            participante: participante
        })
    } catch (error) {
        console.log("ERROR")
    }
}

export const  getParticipantes = async(req, res)=>{
    try {
        const participantes =  await Participantes.find()
        return res.status(200).json(participantes)
        } catch (error) {
        console.log("Hubo un error al momento de traer los participantes")
    }
}

export const getParticipante = async(req, res)=>{
    try {
        const {id} = req.params
        const participante = await Participantes.findById(id)
        if(!participante){
            return res.status(403).json({msg:"No se encontro el participante"})
        }

        return res.status(201).json(participante)
    } catch (error) {
        console.log("Hubo un error al momento de obtener el participante")
    }
}


export const actualizarParticipante = async (req, res)=>{
    try {
        const {id} = req.params
        const body = req.body
        const participante = await Participantes.findOneAndUpdate( {
            _id:id},body,{
                new:true,
            })

        return res.status(201).json({
            msg:"actualizado correctamente",
            participante: participante
        })
    } catch (error) {
        console.log("hubo un error al alctualizar el participante")
    }
}