import multer from 'multer'
import path from 'path'
import fs from 'fs'
import Informe from '../models/informe';


const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', 'informe'),
    filename: (req, file, cd)=>{
        cd(null, file.originalname);
    }
});

    const upload = multer({storage});

export const addInforme = async (req, res)=>{
    try {
        upload.single('file')(req, res, async (err)=>{
            if(err){
                return res.status(400).json({
                    msg: err.message
                })
            }

        const file = req.file;
        const originalname= file.originalname
        const newInforme = new Informe({
            archivo: req.body.archivo,
            idAdministrador: req.body.idAdministrador,
            resumen:  resumen
        });
        try {
            await newInforme.save()
            return res.status(200).json({
                msg: 'Informe guardado correctamente'
            });
        } catch (error) {
            console.error(error)
            return res.status(500).json({
                msg: "Error al guardar el Informe"
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


export const getInforme = async (req, res)=>{
    try {
        const informe = await Informe.find({});
        if (!informe) {
          return res.status(404).json({ error: 'Archive not found' });
        }
        return res.json(informe),200;
    
      } catch (error) {
        console.error('Error getting file:', error);
        return res.status(500).json({ error: 'Internal server Error' });
      }
}


const pdfStoragePath = path.join(__dirname, '..', 'informe');

export const actualizarInforme= async (req, res) => {
  const id  = req.params.id;
  const informe = await Informe.findById(id)
  if(!informe){
    return res.status(403).json({
      msg: "informe no encontrado"
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

    informe.archivo = req.body.archivo,
    informe.idAdministrador = req.body.idAdministrador,
    informe.resumen = resumen
    
    await informe.save()

    return res.status(200).json({ message: 'informe actualizado correctamente' });
    })} catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al actualizar el informe' });
  }
};
