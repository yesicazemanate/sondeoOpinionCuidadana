import React from 'react'

export const CardReporte = () => {
    const title = "Sample Title";
  const description = "This is a sample description.";
  const admin = "John Doe";
   //
  
  return (

    <div className="flex flex-col items-center justify-center">
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 transition-transform duration-300 hover:scale-105 hover:translate-y-1">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-700 text-base mt-4"><strong>Admin:</strong> {admin}</p>
      </div>
    </div>
  </div>
      );
    };
    
    
  
