"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { VscSend } from "react-icons/vsc";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import './style.css';

// import required modules
// import { Scrollbar } from 'swiper/modules';
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination,Autoplay } from 'swiper/modules';


const  App=()=> {
  // const isMobile = window.innerWidth <= 768;
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"><div className="h-[4px] w-full bg-[#A387EE] mx-1 rounded-lg"></div></span>';
        },
      };
  return (
    <>
      <Swiper
        slidesPerView={1}
        // centeredSlides={true}
        slidesPerGroupSkip={0}
        // grabCursor={true}
        pagination={pagination}
        // freeMode={true}
        direction={'horizontal'}
        loop={true}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          900: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            direction:'horizontal'
          },
          600:{
            slidesPerView: 1,
            slidesPerGroup: 1,
            // direction:'vertical'
            
          },
          300:{
            slidesPerView: 1,
            slidesPerGroup: 1,
            // direction:'vertical'
          },

        }}
        // navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        // direction={isMobile ? 'vertical' : 'horizontal'}
        modules={[Autoplay,Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper relative"
      >
        <SwiperSlide >
        <div className='flex justify-between flex-col lg:flex-row items-center px-2'>
            <div className="h-[300px] w-[90%] lg:w-[32%] flex flex-col justify-evenly border-white border border-solid rounded-2xl bg-[#292929] pt-12 p-4 my-4">
              <div className="Upper_section flex flex-col  bg-black rounded-lg p-3 ">
                <div className="flex gap-3 items-center bg-black rounded-lg p-2">
                  <p className="text-xs">Create a retaining wall with height of 10ft, use soil pressures in this pdf.</p>
                  <VscSend color="white" style={{fontSize:"30px"}}/>
                </div>
                <div className="flex gap-1">
                  <img src="/image 24.png" alt="" className="w-[30px] h-[30px]"/>
                  <img src="/image 24.png" alt="" className="w-[30px] h-[30px]"/>
                </div>

              </div>
              <div className="middle_section py-2 ">
                  <p className="text-5xl">1</p>
              </div>
              <div>
                <p className="text-sm">Describe the structure you want to design in detail, include any supporting documents</p>
              </div>

            </div>

            <div className="h-[300px]  w-[90%] lg:w-[32%]  flex flex-col justify-evenly border-white border border-solid rounded-2xl bg-[#292929] p-4 my-4">
              <div className="Upper_section flex justify-center ">
                <img src="/Reinforcement 1.png" alt="" className="w-[110px] h-[110px]" />

              </div>
              <div className="middle_section py-2 flex gap-3 items-center">
                  <p className="text-5xl">2</p>
                  <div className="flex gap-3 items-center bg-black rounded-lg p-3">
                  <p className="text-xs">Can you resolve any conflicts? It looks like there isn’t enough spacing</p>
                </div>
              </div>
              <div>
                <p className="text-sm">Chat to refine or ask suggestions. Every iteration is already preliminarily structurally checked.</p>
              </div>

            </div>

            <div className="h-[300px] w-[90%] lg:w-[32%]  flex flex-col justify-evenly border-white border border-solid rounded-2xl bg-[#292929] p-4 my-4">
              <div className="Upper_section flex">
                <p className="text-5xl mt-auto">3</p>
                <div className="flex gap-4 px-4 mx-auto">
                  <img src="/retwall-removebg-preview 1.png" alt="" className="w-[169px] h-[169px]" />
                  <div className="flex mt-auto ">
                    <img src="/image 22 (1).png" alt="" className="w-[30px] h-[30px]" />
                    <img src="/revitlogo-removebg-preview 1 (1).png" alt="" className="w-[25px] h-[25px]" />

                  </div>
                </div>

              </div>
              <div className="middle_section py-2 flex gap-3 items-center">

                  
              </div>
              <div>
                <p className="text-sm">Share your model instantly. Export to AutoCAD or Revit (fully editable). Or download your calculations.</p>
              </div>

            </div>

        </div>
        
        </SwiperSlide>


        <SwiperSlide>
        <div className='flex justify-between flex-col lg:flex-row items-center px-2'>
          <div className="h-[300px]  w-[97%] lg:w-[32%]  flex flex-col justify-evenly border-white border border-solid rounded-2xl bg-[#292929] p-4 my-4">
              <div className="Upper_section flex justify-center ">
                <img src="/images/Documents 1.png" alt="" className="w-[110px] h-[110px]" />

              </div>
              <div className="middle_section py-2 flex gap-3 items-center">
                  <p className="text-5xl">1</p>
                  <div className="flex gap-3 items-center bg-black rounded-lg p-3">
                  <p className="text-xs">Are there reinforcements in the pipe vaults?</p>
                  <VscSend color="white" style={{fontSize:"20px"}}/>
                </div>
              </div>
              <div>
                <p className="text-sm">Upload RFIs, documents and relevant drawings. Ask questions.</p>
              </div>

            </div>

            <div className="h-[300px]  w-[97%] lg:w-[32%]  flex flex-col justify-evenly border-white border border-solid rounded-2xl bg-[#292929] p-4 my-4">
              <div className="Upper_section flex justify-center ">
                <img src="/images/Steel Rebar 1.png" alt="" className="w-[110px] h-[110px]" />

              </div>
              <div className="middle_section py-2 flex gap-3 items-center">
                  <p className="text-5xl">2</p>
                  <div className="flex gap-3 items-center bg-black rounded-lg p-3">
                  <p className="text-xs">Can you change the rebars from #7 to #8?</p>
                  <VscSend color="white" style={{fontSize:"20px"}}/>
                </div>
              </div>
              <div>
                <p className="text-sm">Ask to generate a model based on As-Builts to show conflicts. Chat to refine.</p>
               </div>

            </div>

            <div className="h-[300px]  w-[97%] lg:w-[32%] flex flex-col justify-evenly border-white border border-solid rounded-2xl bg-[#292929] p-4 my-4">
              <div className="Upper_section flex " style={{height:"70%"}}>
                <p className="text-5xl mt-auto">3</p>
                <div className="flex gap-4 px-4 mx-auto ">
                    <div className='flex gap-4 px-4 mx-auto'>

                        <img src="/images/sap2000-removebg-preview 1.png" alt="" className="w-[130px] object-contain" />
                    </div>
                  
                </div>
              </div>
              <div>
                <p className="text-sm">Run preliminary Structural Analysis, or ask model to export to SAP2000*</p>
              </div>

            </div>

        </div>
        
        </SwiperSlide>

        <SwiperSlide>
        <div className='flex justify-between flex-col lg:flex-row items-center px-2'>
          <div className="h-[300px]  w-[97%] lg:w-[32%] flex flex-col justify-evenly border-white border border-solid rounded-2xl bg-[#292929] p-4 my-4">
              <div className="Upper_section flex h-[70%]" style={{height:"70%"}}>
                <p className="text-5xl mt-auto">1</p>
                <div className="flex gap-4 px-4 mx-auto">
                  <img src="/images/Segmental-lining-scheme-removebg-preview 1.png" alt="" className="w-[130px]  object-contain" />
                  
                </div>
              </div>
              <div>
                <p className="text-sm">Create segmental tunnel lining design based on input parameters.</p>
              </div>
            </div>

            <div className="h-[300px]  w-[97%] lg:w-[32%] flex flex-col justify-evenly border-white border border-solid rounded-2xl bg-[#292929] p-4 my-4">
              <div className="Upper_section flex h-[70%]" style={{height:"70%"}}>
                <p className="text-5xl mt-auto">2</p>
                <div className="flex gap-4 px-4 mx-auto mb-auto">
                    <div className='w-[120px] h-[120px] '>

                  <img src="/images/segm-removebg-preview 1.png" alt="" className="w-full h-full  object-contain" />
                    </div>
                  
                </div>
              </div>
              <div>
                <p className="text-sm">Come up with developed intrados views, waterproofing gasket checks, Revit Model</p>
              </div>
            </div>

            <div className="h-[300px]  w-[97%] lg:w-[32%]  flex flex-col justify-evenly border-white border border-solid rounded-2xl bg-[#292929] p-4 my-4">
              <div className="Upper_section flex justify-center ">
                <img src="/images/Layers 1.png" alt="" className="w-[100px] h-[100px]" />

              </div>
              <div className="middle_section py-2 flex gap-3 items-center">
                  <p className="text-5xl">3</p>
                  <div className="flex gap-3 items-center bg-black rounded-lg p-3">
                  <p className="text-xs">Can you draw this on a layer on AutoCAD?</p>
                  <VscSend color="white" style={{fontSize:"20px"}}/>
                </div>
              </div>
              <div>
                <p className="text-sm">Request layers to be a specific color, and export them directly.</p>
              </div>

            </div>

        </div>
        
        </SwiperSlide>

      </Swiper>
    </>
  );
}

export default App;