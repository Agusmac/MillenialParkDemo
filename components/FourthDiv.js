import Image from 'next/image'
import React from 'react'

export default function FourthDiv() {
    return (
        <div className='mb-32'>
            <div className='mx-auto text-center text-[#3D3D3D] mb-36'>
                <h2 className='text-xl md:text-3xl leading-none mb-5'>¿POR QUÉ ES UN BUEN NEGOCIO INVERTIR EN ORLANDO?</h2>
                <h3 className='text-3xl md:text-5xl leading-[1.11]'>¡Dos poderosas razones! <br />
                    <span className='text-[#1A6662] font-medium'>Rentabilidad y Valorización.</span></h3>
            </div>
            {/*  */}
            <div className='w-full background-Img-2 h-[60vh] md:h-[80vh] font-light text-center'>
                <div className='flex justify-center mx-auto w-full text-white bg-[#1A6662] px-6 sm:px-0 rounded-[29px] py-8 sm:py-14 relative -top-24 max-w-[88vw] sm:max-w-[80vw] lg:max-w-[951px]'>

                    <div className='flex-1 flex flex-col justify-start items-center'>
                        <p className='font-medium text-4xl sm:text-6xl md:text-8xl mb-2'>97%</p>
                        <p className='text-base sm:text-xl md:text-[28px] leading-none'>De ocupación en Orlando <br />
                            <span className='text-xs sm:text-base md:text-xl leading-none'>Aproximadamente</span>
                        </p>
                    </div>

                    <div className='h-auto flex items-center min-w-[2px]'>
                        <div className='bg-white h-3/4 w-[2px] '></div>
                    </div>

                    <div className='flex-1 flex flex-col justify-start items-center'>
                        <p className='font-medium text-4xl sm:text-6xl md:text-8xl mb-2'>19%</p>
                        <p className='text-base sm:text-xl md:text-[28px] leading-none'>Crecimiento de población <br />

                        </p>
                    </div>


                </div>
            </div>
            <div className='py-[68px] w-full bg-[#E37830] text-white px-10'>
                <p className='mx-auto text-center mb-5 text-3xl sm:text-[38px]'> <span className='font-bold'>Diversificá</span> tu capital y <span className='font-bold'>asegurá</span> tu futuro financiero</p>
                <div className='text-[#E37830] mx-auto bg-white rounded-xl w-fit text-xl px-7 py-5 font-bold'>Consultar ahora</div>
            </div>
            <div className='background-Img-3 h-[50vh] md:h-[70vh] w-full'></div>
        </div>
    )
}
