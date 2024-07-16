import { CardCertificado } from "./CardCertificado.jsx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React from 'react'

export const DescargarCertificado = () => {
  return (
    <div>
        <PDFDownloadLink document={<CardCertificado/>} fileName="certificado1.pdf">
{({loading, url,error, blob})=> loading ?<button>
Loading Document...
</button>: <button>
    Download
</button>
}
        </PDFDownloadLink>
    </div>
  )
}
