import mongoose from "mongoose";


const certificadoShema = mongoose.Schema(
    {
       idParticipacion:{
        type: String,
        require: true,
        trim:true
       },
       fecha_emision:{
        type: String,
        require: true,
        trim:true
       },
       identificador:{
        type: String,
        require: true,
        trim:true,
        unique:true
       },
       archivoParticipacion:{
        type: String,
        require: true,
        trim:true
       }

    },
    {
        timesTamps: true
    }

)

const Certificado = mongoose.model('Certificado', certificadoShema)

export default Certificado;