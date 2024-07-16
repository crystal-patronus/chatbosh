"use client"

import React, { useEffect, useState } from 'react'
import PageLayout from '@/app/ui/PageLayout';

const PrivacyPolice = () => {
  const [pdfurl , setPDFURL] = useState('')
  useEffect(()=>{

      const fetchpdf =async() =>{
        try{
          const res = await fetch('https://api.stru.ai/v1/privacy');
          const blob = await res.blob();
          const url = URL.createObjectURL(blob)
          setPDFURL(url)
        }catch(error){
          console.log('error finding the pdf',error)
        }
      };

      fetchpdf();

  },[])
  // console.log(pdfurl)
  return (
    <PageLayout>
      <main className="w-full flex flex-col items-center py-20">
        <div className="text-[#FAFAFA] text-[80px] font-semibold text-center bg-clip-text max-md:mt-0 max-md:max-w-full max-md:text-4xl max-lg:text-5xl">
          Privacy Policy
        </div>
        {pdfurl ? (
          <iframe
              src={pdfurl}
              width="100%"
              height="600px"
              className="mt-20 w-[95%] sm:w-[100%] h-[900px] sm:h-[1800px] " 

          />)
          :<div className='mt-20 text-white text-2xl fontbo'>Loading PDF .......</div>
        }
      </main>
    </PageLayout>
  )
}

export default PrivacyPolice
