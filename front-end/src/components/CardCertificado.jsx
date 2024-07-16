import React from 'react'
import {
    Document,
    Text,
    Page,
    StyleSheet,
    Image
}from '@react-pdf/renderer'
import image from '../assets/KarolG.png'
export const CardCertificado = () => {
  return (
   <Document>
    <Page>
        <Text>
            Certificado
        </Text>
        <Image src={image}/>
        <Text>
            Lorem ipsum dolor sit amet 
            consectetur adipisicing elit.
             Repellendus tenetur iusto quos aliquam
              consequuntur quidem, 
              cupiditate neque exercitationem
               sapiente ea maiores,
                corrupti voluptatibus aliquid 
                commodi nisi hic error quia
                 consectetur!
        </Text>
    </Page>
   </Document>
  )
}
