
import Certificado from "../models/certificado.js"; 
import { generateUniqueId } from "../utils/uniqueIndenticador.js";
import uploadCer from '../libs/multerCertificados.js';

export const addCerticado =  (req, res)=>{

    const idUnico = generateUniqueId()
    uploadCer.single('archivoParticipacion')(req, res, async (err)=>{
        if (err) {
            console.error('Error al cargar el archivo:', err.message); 
            return res.status(400).json({ error: err.message });
        
        } if (!req.file) {
            return res.status(400).json({ error: 'No se subió ningún archivo' });
        }
        console.log(req.file)
        
      
        const newManual = new Certificado({
            idParticipacion: req.body.idParticipacion,
            fecha_emision: req.body.fecha_emision,
            identificador:  idUnico,
            archivoParticipacion:req.file.filename
        });
        
            try {
            const certificado = await Certificado.create(newManual)
            return res.status(200).json({
                msg: 'Certificado guardado correctamente',
                certificado: certificado
            });
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                msg: "Error al guardar el certificado"
            })
        }

        
   
})
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
