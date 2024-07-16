import Sondeo from '../models/sondeo.js'
import upload from '../libs/multer.js';
import path from 'path'
export const agregarSondeo = (req, res) => {
    upload.single('imgSondeo')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        } if (!req.file) {
            return res.status(400).json({ error: 'No se subió ningún archivo' });
        }
        console.log(req.file)

        const { titulo, descripcion, fechaApertura, fechaCierre, perfil_poblacional} = req.body;

        const newSonde = {
            titulo,
            descripcion,
            fechaApertura,
            fechaCierre,
            perfil_poblacional,
            imgSondeo: req.file.filename, 
            
        };

        try {
            const sondeo = await Sondeo.create(newSonde);
            return res.status(201).json({
                msg: "sondeo agregado correctamente",
                sondeo: sondeo
            });
        } catch (error) {
            console.log("ERROR", error);
            return res.status(500).json({ error: 'Error al crear el sondeo' });
        }
    });
};
export const obtenerSondeos = async (req, res) => {
    try {
        const sondeos = await Sondeo.find()
        return res.status(200).json(sondeos);
    } catch (error) {
        console.error("ERROR", error);
        return res.status(500).json({ error: 'Error al obtener los sondeos' });
    }
};
export const obtenerSondeo= async(req, res)=>{
    const {id}= req.params
    try{
const sondeo = await Sondeo.findById(id)
if(!sondeo) return res.status(400).send('sondeo no encontrado')
    res.status(200).json({sondeo: sondeo})
    }catch(error){
        console.log(" error", error)
    }
}
export const deleteSondeo=async(req, res)=>{
    const {id}= req.params 
    try{
const sondeo = await Sondeo.findByIdAndDelete(id)
if(!sondeo) return res.status(400).send('usuario no encontrado')
    res.status(200).send('sondeo eliminado')
    }catch(error){
        console.log("error", error)
    }
}
export const actualizarSondeo= async(req, res)=>{
    const {id}= req.params
    const body= req.body
    try{
const sondeo =await  Sondeo.findByIdAndUpdate(id, body)
if(!sondeo) return res.status(400).send('sondeo no encontrado')
    res.json({message: 'sondeo actualizado', sondeo: sondeo})
    }catch(error){
        console.log('error', error)
    }
}