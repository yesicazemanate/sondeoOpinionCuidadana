import { CardCertificado } from "./CardCertificado.jsx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React ,{useState, useEffect}from 'react'
import axios from 'axios';

 export const DescargarCertificado = () => {
  const [certificados, setCertificados] = useState([]);

  useEffect(() => {
    const fetchCertificados = async () => {
      try {
        const response = await axios.get('http://localhost:4003/obtenerCertificados');
        setCertificados(response.data); 
      } catch (error) {
        console.error('Error fetching certificados', error);
      }
    };

    fetchCertificados();
  }, []);
  
  const handleSavePDF = async (blob) => {
    const formData = new FormData();
    formData.append('idParticipacion', '12345');
    formData.append('fecha_emision', '2024-07-16');
    formData.append('identificador', 'unique12345');
    formData.append('archivoParticipacion', new Blob([blob], { type: 'application/pdf' }), 'certificado1.pdf');

    try {
      const response = await axios.post('http://localhost:4003/obtenerCertificados', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File and data uploaded successfully', response.data);
    } catch (error) {
      console.error('Error uploading file and data', error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {certificados.map((certificado) => (
        <div key={certificado._id} className="border p-4 rounded shadow-md bg-white">
          <h3 className="text-lg font-semibold">Certificado: {certificado.archivoParticipacion}</h3>
          <p>Fecha de Emisión: {certificado.fecha_emision}</p>
          <p>ID de Participación: {certificado.idParticipacion}</p>
          <p>Identificador: {certificado.identificador}</p>
          
          <PDFDownloadLink 
            document={<CardCertificado />} 
            fileName={certificado.archivoParticipacion}>
            {({ loading, url, error, blob }) => {
              if (loading) {
                return <button disabled className="mt-2 bg-gray-300 text-white p-2 rounded">Loading Document...</button>;
              }
              if (blob) {
                handleSavePDF(blob);
              }
              return <button className="mt-2 bg-blue-500 text-white p-2 rounded">Download</button>;
            }}
          </PDFDownloadLink>
        </div>
      ))}
    </div>
  );
}
