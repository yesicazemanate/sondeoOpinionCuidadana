import multer from 'multer'
import path from 'path'
import url from 'url'
import fs from 'fs'
import Certificado from "../models/certificado.js"; 
import { generateUniqueId } from "../utils/uniqueIndenticador.js";

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', 'certificados'),
    filename: (req, file, cd)=>{
        cd(null, file.originalname);
    }
});

    const upload = multer({storage});

export const addCerticado = async (req, res)=>{
    try {
        const idUnico = generateUniqueId()
        upload.single('file')(req, res, async (err)=>{
            if(err){
                return res.status(400).json({
                    msg: err.message
                })
            }

        const file = req.file;
        const originalname= file.originalname
        const newManual = new Certificado({
            idParticipacion: req.body.idParticipacion,
            fecha_emision: req.body.fecha_emision,
            identificador:  idUnico,
            archivoParticipacion: originalname
        });
        try {
            await newManual.save()
            return res.status(200).json({
                msg: 'Certificado guardado correctamente'
            });
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                msg: "Error al guardar el certificado"
            })
        }

        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}


export const getCerticados = async (req, res)=>{
    try {
        const certificado = await Certificado.find({});
        if (!certificado) {
          return res.status(404).json({ error: 'Archive not found' });
        }
        return res.json(certificado),200;
    
      } catch (error) {
        console.error('Error getting file:', error);
        return res.status(500).json({ error: 'Internal server Error' });
      }
}


const pdfStoragePath = path.join(__dirname, '..', 'certificado');

export const actualizarCertificado = async (req, res) => {
  const id  = req.params.id;
  const certificado = await Certificado.findById(id)
  if(!certificado){
    return res.status(403).json({
      msg: "manual no encontrado"
    })
  }

  try {
    upload.single('file')(req, res, async (err)=>{
      if(err){
          return res.status(400).json({
              msg: err.message
          })
      }
    const archivoActualizado = req.file;
    console.log(archivoActualizado)
    const rutaArchivo = path.join(pdfStoragePath, certificado.archivoParticipacion);
    fs.unlinkSync(rutaArchivo); // Elimina el archivo anterior
// Asigna el nombre original al archivo actualizado

        certificado.idParticipacion = req.body.idParticipacion,
        certificado.fecha_emision = req.body.fecha_emision,
        certificado.identificador = idUnico,
        certificado.archivoParticipacion = archivoActualizado.filename
    
    await certificado.save()

    return res.status(200).json({ message: 'certificado actualizado correctamente' });
    })} catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al actualizar el certificado' });
  }
};
