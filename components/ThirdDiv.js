import Image from 'next/image'
import React from 'react'
import DragScroll from '../helpers/DragScroll'

export default function ThirdDiv() {
    DragScroll('.carousel')
    return (
        <>
        <div className='px-[6vw] xl:px-[7vw] flex flex-col xl:flex-row items-center gap-24 mb-32'>
            <div className='flex-1 text-[#3D3D3D]'>
                <h2 className='text-[#E37830] font-medium text-6xl md:text-[78px] mb-4 leading-none'>Millenia Park</h2>
                <p className='text-2xl md:text-[28px] leading-[1.34] font-normal mb-12'>Gran complejo de departamentos distribuido
                    en 8 edificios, que cuenta con 960 unidades
                    de vivienda y 25.000 pies cuadrados de espacio
                    comercial.</p>

                <div className='flex text-lg md:text-xl gap-4 mb-[38px]'>
                    <div className='min-w-5 relative top-2 flex-shrink-0'>
                        <Image  alt='arrow' src={'/GreenArrow.png'} width={21} height={13}></Image>
                    </div>
                    <p>
                        Esta comunidad está situada en una de las áreas más deseadas
                        de Orlando, a solo dos millas del muy esperado parque temático
                        de Universal Studios, Universal Epic.
                    </p>
                </div>
                <div className='flex text-lg md:text-xl gap-4 mb-[38px]'>
                    <div className='min-w-5 relative top-2 flex-shrink-0'>
                        <Image  alt='arrow' src={'/GreenArrow.png'} width={21} height={13}></Image>
                    </div>
                    <p>
                        Posee un amplio sector comercial y gran circulación de personas,
                        ideales para comercios en busca de un lugar competitivo en el
                        floreciente mercado inmobiliario de Orlando.
                    </p>
                </div>
                <div className='flex text-lg md:text-xl gap-4 mb-20 xl:mb-14'>
                    <div className='min-w-5 relative top-2 flex-shrink-0'>
                        <Image alt='arrow' src={'/GreenArrow.png'} width={21} height={13}></Image>
                    </div>
                    <p>
                        Su cercanía a la carretera interestatal, es un factor qué sin duda
                        promoverá el crecimiento de la zona.
                    </p>
                </div>

                <div className='bg-[#1A6662] xl:w-[120%] py-10 sm:pr-10 text-white leading-none text-2xl sm:text-3xl md:text-[38px] flex justify-center sm:justify-end rounded-[20px] sm:rounded-tl-none sm:rounded-bl-none relative sm:-left-[7vw] 2xl:-left-[20vw]'>
                    <p>¡Aprovechá esta oportunidad <br />
                        de inversión, es <span className='font-bold'>AHORA!</span></p>

                </div>
            </div>

            {/*  */}
            <div className='hidden flex-1 h-[1239px] w-full xl:flex gap-5'>
                <div className=' flex flex-col gap-11'>
                    <Image alt='Millenial park ilustracion' src={'/third-div/Rectangle-14.png'} width={275} height={381}></Image>
                    <Image alt='Millenial park ilustracion' src={'/third-div/Rectangle-16.png'} width={275} height={381}></Image>
                    <Image alt='Millenial park ilustracion' src={'/third-div/Rectangle-19.png'} width={275} height={381}></Image>
                </div>
                <div className='flex flex-col gap-11 justify-center'>
                    <Image alt='Millenial park ilustracion' src={'/third-div/Rectangle-15.png'} width={275} height={381}></Image>
                    <Image alt='Millenial park ilustracion' src={'/third-div/Rectangle-17.png'} width={275} height={381}></Image>
                </div>
            </div>
            {/*  */}
           



        </div>
         {/* carousel */}
         <div className='pl-[6vw] mt-24 xl:hidden mb-32'>
                <div className='overflow-hidden relative'>
                    <div className='carousel flex justify-start items-center gap-5 md:gap-10 overflow-x-scroll scrollbar-hide cursor-grab pr-10'>
                        <Image draggable={false} quality={100} alt='imagen del complejo' className='min-w-full min-h-[381px]' src={'/third-div/Rectangle-14.png'} width={275} height={381}></Image>
                        <Image draggable={false} quality={100} alt='imagen del complejo' className='min-w-full min-h-[381px]' src={'/third-div/Rectangle-16.png'} width={275} height={381}></Image>
                        <Image draggable={false} quality={100} alt='imagen del complejo' className='min-w-full min-h-[381px]' src={'/third-div/Rectangle-19.png'} width={275} height={381}></Image>
                        <Image draggable={false} quality={100} alt='imagen del complejo' className='min-w-full min-h-[381px]' src={'/third-div/Rectangle-15.png'} width={275} height={381}></Image>
                        <Image draggable={false} quality={100} alt='imagen del complejo' className='min-w-full min-h-[381px]' src={'/third-div/Rectangle-17.png'} width={275} height={381}></Image>
                        {/* <div className='absolute top-0 bottom-0 right-0 w-10 backdrop-blur-[1px] bg-gradient-to-r  from-transparent to-[#1e1e1e] opacity-70 '></div> */}
                    </div>
                </div>
            </div>
</>
    )
}
