import mongoose from 'mongoose'

const usuarioShema = mongoose.Schema({
   tipo_documento:{
    type: String,
    enum: ['Cedula de ciudadania', 'Tarjeta de identidad', 'Cedula de extranjeria'],
    require: true,
    trim: true
},
numero_documento:{
    type: Number,
    require: true,
    trim: true
},
nombres:{
    type: String,
    require: true,
    trim: true
},
apellidos:{
    type: String,
    require: true,
    trim: true
},
sexo:{
    type: String,
    enum: ['Hombre', 'Mujer', 'Intersexual', 'Indefinido', 'Prefieren no decir'],
    require: true,
    trim: true
},
telefono_celular:{
    type: Number,
    require: true,
    trim: true
},
telefono_fijo:{
    type: Number,
    trim: true
},
correo_electronico:{
    type: String,
    require: true,
    trim: true
},
municipio:{
    type: String,
    require: true,
    trim: true
},
direccion:{
    type: String,
    require: true,
    trim: true
},
barrio_vereda:{
    type: String,
    require: true,
    trim: true
},
fecha_nacimiento:{
    type: String,
    require: true,
    trim: true
},
etnia:{
    type: String,
    require: true,
    trim: true
},
condicion_discapacidad:{
    type: String,
    trim: true
},
estrato_residencial:{
    type: String,
    require: true,
    trim: true
},
nivel_educativo:{
    type: String,
    require: true,
    trim: true
},
acceso_dispositivo:{
    type: Boolean,
    require: true,
    trim: true
},
dispositivos:{
    type: String,
    trim: true
},
conectividad_internet:{
    type: Boolean,
    require: true,
    trim: true
},
tipo_regimen_afiliacion:{
    type: String,
    enum: ['Subsidiado', 'Contributivo'],
    require: true,
    trim: true
},
password:{
    type: String,
    require: true,
    trim: true
},
id_rol:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'rol', 
    required: true
}



}
,
{
    timestamps: true
})
const Usuarios = mongoose.model("usuario", usuarioShema)
export default  Usuarios