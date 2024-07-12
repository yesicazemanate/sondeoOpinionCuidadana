import mongoose from 'mongoose'

const rolShema = mongoose.Schema({
nombre:{
    type:String,
    require: true,
    trim:true 
}
}
,
{
    timestamps: true
})
const Rol = mongoose.model('rol', rolShema)
export default Rol