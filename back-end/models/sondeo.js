import mongoose from 'mongoose'

const sondeoShema = mongoose.Schema({
    titulo:{
        type:String,
        require: true,
        trim:true 
    },
    descripcion:{
        type:String,
        require: true,
        trim:true
    },
    fechaPublicacion:{
        type:String,
        require: true,
        trim:true
    },
    fechaCierre:{
        type:String,
        require: true,
        trim:true
    },perfil_poblacional:{
        type:String,
        require: true,
        trim:true
    },
    imgSondeo:{
        type:String,
        require: true,
        trim:true
    }
    }
    ,
    {
        timestamps: true
    })
    const Sondeo = mongoose.model('sondeo', sondeoShema)
    export default Sondeo