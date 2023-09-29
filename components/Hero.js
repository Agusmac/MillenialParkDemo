import Image from 'next/image'
import React from 'react'

export default function Hero() {


  return (
    <div className='w-full min-h-screen Hero-bg relative mb-24'>
      {/* bottom-[20%] */}
      <div className='absolute inset-0 bg-gradient-to-b from-[rgba(34,33,32,0.60)] via-transparent to-transparent'></div>
      <div className='relative z-40 text-white flex flex-col xl:flex-row py-28 px-[5vw] 2xl:px-[7vw] justify-between gap-16 h-full'>
        <div className='flex-1'>
          <Image className='max-w-[40vw]' priority src='/Millenia-hero-logo.png' alt='Millenia Park Logo' width={272} height={309}></Image>
          <div className='font-medium text-[33px] sm:text-[42px] md:text-5xl xl:text-[58px] leading-none hero-title mt-4'>
            Excelente oportunidad <br />
            de inversión en Orlando<br />
            <span className='text-3xl sm:text-4xl md:text-[40px]'>con alto retorno de renta en dólares </span>
          </div>
          <div className='hidden xl:block relative -top-20 -left-40'>
            <Image priority src='/Rulo-hero.png' alt='Millenia Park Logo' width={517} height={320}></Image>
          </div>

        </div>

        <div className='rounded-[32px] bg-white  w-full max-w-[505px] flex-1 self-center pb-10 md:pb-14 pt-12 md:pt-[74px]   flex flex-col items-center px-7 md:px-11'>
          <h3 className='text-[#E37830] text-2xl md:text-3xl font-medium mb-10 whitespace-nowrap'>Comenzá a invertir HOY</h3>
          <div className='h-[47px] bg-[#F0F0F0] w-full rounded-lg mb-5 font-light flex items-center px-8'>
            <input placeholder='Nombre y Apellido*' className='bg-transparent w-full text-[#8B8B8B] placeholder-[#8B8B8B] focus:ring-0 outline-none text-lg md:text-xl' type="text" />
          </div>
          <div className='h-[47px] bg-[#F0F0F0] w-full rounded-lg mb-5 font-light flex items-center px-8'>
            <input placeholder='Correo electrónico*' className='bg-transparent w-full text-[#8B8B8B] placeholder-[#8B8B8B] focus:ring-0 outline-none text-lg md:text-xl' type="text" />
          </div>
          <div className='h-[47px] bg-[#F0F0F0] w-full rounded-lg mb-5 font-light flex items-center px-8'>
            <input placeholder='Teléfono*' className='bg-transparent w-full text-[#8B8B8B] placeholder-[#8B8B8B] focus:ring-0 outline-none text-lg md:text-xl' type="text" />
          </div>
          <div className='h-[47px] bg-[#F0F0F0] w-full rounded-lg mb-10 font-light flex items-center px-8'>
            <input placeholder='Consulta*' className='bg-transparent w-full text-[#8B8B8B] placeholder-[#8B8B8B] focus:ring-0 outline-none text-lg md:text-xl' type="text" />
          </div>
          <div className='bg-[#E37830] grid place-content-center h-14 md:h-16 w-full text-white rounded-lg text-xl md:text-2xl cursor-pointer mb-4 md:mb-2'>
            Contáctanos
          </div>
          <p className='text-sm text-[#8B8B8B] text-center'>Por favor complete el formulario y presione el botón Contáctanos. <br />
            Le enviaremos toda la información a la brevedad.</p>

        </div>



      </div>
    </div>
  )
}
