import mongoose, { Schema } from "mongoose";


const participanteShema = mongoose.Schema(
    {
    idUsuario:{
        type: String,
        require:true,
    },
    idSondeo:{
        type: String,
        require:true,
    },
    fechaParticipacion:{
        type: String,
        require:true,
    },
    idCertificado:{
        type: String,
        require:true,
    }
    },
    {
        timesTamps: true
    }
)

const Participantes = mongoose.model("Participantes", participanteShema)

export default Participantes;