import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function EighthDiv() {
    return (
        <div className=' mb-24 sm:mb-48 px-[5vw]'>
            <div className='mx-auto w-full max-w-[900px] pt-8 pb-7 rounded-[20px] border-2 border-[#1A6662] mb-14 sm:mb-28'>
                <h3 className='mx-auto text-center text-[#E37830] font-medium text-xl sm:text-2xl md:text-3xl mb-5 px-6 md:px-0'>¡Entregas en el primer cuatrimestre de 2024!</h3>
                <Link href={'#hero-form'}>
                    <div className='text-white mx-auto bg-[#E37830] rounded-xl w-fit text-lg sm:text-xl px-5 py-3 sm:px-7 sm:py-5 font-bold'>Consultar ahora</div>
                </Link>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 mx-auto max-w-[1240px] gap-3 md:gap-x-[26px] md:gap-y-11 mb-20 sm:mb-30 md:mb-60'>
                <Image quality={100} alt='construction view' src='/grid/grid-1.png' width={396} height={358} />
                <Image quality={100} className='relative md:top-14' alt='construction view' src='/grid/grid-2.png' width={396} height={358} />
                <Image quality={100} alt='construction view' src='/grid/grid-3.png' width={396} height={358} />
                <Image quality={100} alt='construction view' src='/grid/grid-4.png' width={396} height={358} />
                <Image quality={100} className='relative md:top-14' alt='construction view' src='/grid/grid-5.png' width={396} height={358} />
                <Image quality={100} alt='construction view' src='/grid/grid-6.png' width={396} height={358} />
            </div>

            <div className='mx-auto w-full max-w-[952px] pt-[60px] pb-7 rounded-[20px] bg-[#E37830] mb-14 sm:mb-28 text-white text-center'>
                <h3 className='mx-auto text-xl sm:text-2xl md:text-3xl lg:text-[38px] mb-2 px-6 md:px-0'><span className='font-medium'>Acompañamiento</span> en todo el proceso de compra.</h3>
                <p className='text-xl px-4 sm:px-0 md:text-2xl lg:text-[28px] mb-8'>¿Querés saber cómo avanzar? ¿Cómo es el proceso?</p>

                <div className='px-4 md:px-16 text-sm sm:text-base flex flex-auto flex-wrap gap-2 sm:gap-4 justify-center mb-9'>
                    <div className='py-[9px] px-5 sm:px-7 border border-white rounded-[50px] w-fit leading-none'>¿Cuáles son los pasos para invertir?</div>
                    <div className='py-[9px] px-5 sm:px-7 border border-white rounded-[50px] w-fit leading-none'>¿Debo viajar?</div>

                    <div className='py-[9px] px-5 sm:px-7 border border-white rounded-[50px] w-fit leading-none'>¿Qué documentos necesito?</div>
                    <div className='py-[9px] px-5 sm:px-7 border border-white rounded-[50px] w-fit leading-none'>¿Cuánto toma el proceso de inversión?</div>
                </div>

                <Link href={'#hero-form'}>
                    <div className='text-[#E37830] mx-auto bg-white rounded-xl w-fit text-lg sm:text-xl px-5 py-3 sm:px-7 sm:py-5 font-bold'>¡Contactanos!</div>
                </Link>
            </div>


        </div>
    )
}
