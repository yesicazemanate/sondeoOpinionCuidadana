import mongoose, { Schema } from "mongoose";

const respuestaSchema = mongoose.Schema(
    {
        idParticipacion:{
            type: String,
            require:true

        },
        idPregunta:{
            type: String,
            require:true
            
        },
        respuesta:{
            type:Schema.Types.Mixed,
            require:true   
        }
    },
    {timesTamps: true}
)
const Respuesta = mongoose.model("Respuesta", respuestaSchema)

export default Respuesta;