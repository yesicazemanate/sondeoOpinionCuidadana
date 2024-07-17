import { CardCertificado } from "./CardCertificado.jsx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React from 'react'
import axios from 'axios';

 export const DescargarCertificado = () => {
  const handleSavePDF = async (blob) => {
    const formData = new FormData();
    formData.append('pdf', blob, 'certificado1.pdf');
    formData.append('idParticipacion', '12345');
    formData.append('fecha_emision', '2024-07-16');
    formData.append('identificador', 'unique12345');

    try {
      const response = await axios.post('http://localhost:4003/certificados', formData, {
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
    <div>
      <PDFDownloadLink document={<CardCertificado />} fileName="certificado1.pdf">
        {({ loading, url, error, blob }) => {
          if (loading) {
            return <button>Loading Document...</button>;
          }
          if (blob) {
            handleSavePDF(blob);
          }
          return <button>Download</button>;
        }}
      </PDFDownloadLink>
    </div>
  );
}
