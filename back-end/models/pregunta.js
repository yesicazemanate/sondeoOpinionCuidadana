import mongoose, { Schema } from "mongoose";

const preguntaSchema = mongoose.Schema(
    {
        idSondeo:{
            type: String,
            require:true

        },
        pregunta:{
            type: String,
            require:true
            
        },
        tipoPregunta:{
            type: String,
            require:true,  
            enum: ["Abierta", "Opcion Multiple"],
        },
        opcionesRespuesta:{
            type:Schema.Types.Mixed,
            require:true   
        }
    },
    {timesTamps: true}
)
const Pregunta = mongoose.model("Pregunta", preguntaSchema)

export default Pregunta;