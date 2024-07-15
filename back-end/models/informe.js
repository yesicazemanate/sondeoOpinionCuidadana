import mongoose from "mongoose";

const informeSchema = mongoose.Schema(
    {
        archivo:{
            type: String,
            require:true,
            trim:true,
        },
        idAdministrador:{
            type: String,
            require:true,
            trim:true,
        },
        resumen:{
            type: String,
            require:true,
            trim:true,
        }

    },
    { timesTamps: true}
)

const Informe = mongoose.model('Informe', informeSchema);


export default Informe