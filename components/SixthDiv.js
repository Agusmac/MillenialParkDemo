import Image from 'next/image'
import React from 'react'

export default function SixthDiv() {
    return (
        <div className='mb-32'>
            <h2 className='mx-auto text-center text-2xl px-[3vw] sm:px-0 sm:text-3xl lg:text-[38px] max-w-[1013px] mb-11'><span className='font-medium'>El diseño interior contemporáneo</span> de <span className='font-medium text-[#E37830]'>Millenia Park</span> está dirigido
                a residentes con los <span className='font-medium'> más altos estándares.</span></h2>
            <p className='mx-auto text-center text-xl px-[3vw] sm:px-0 sm:text-2xl lg:text-[28px] mb-12'>Los artefactos y amenities de <span className='font-medium'>alta gama</span> incluyen:</p>


            <div className='mx-auto px-[3vw] xl:px-0  max-w-6xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-3 gap-y-3 sm:gap-x-4 sm:gap-y-5 mb-24 justify-items-center '>

                <div className='pb-7 bg-[#FAAE36] rounded-[30px] min-h-[224px] flex flex-col justify-start items-center px-5 pt-9 max-w-[276px]'>
                    <Image alt='planos' src='/orange-flower.png' width={41} height={34} />
                    <p className='font-medium text-white text-base sm:text-lg text-center mt-5 leading-[1.36]'>Cocinas estilo europeo con
                        electrodomésticos de acero
                        inoxidable y alto rendimiento,
                        y mesadas de granito.</p>
                </div>

                <div className='pb-7 bg-[#FAAE36] rounded-[30px] min-h-[224px] flex flex-col justify-start items-center px-5 pt-9 max-w-[276px]'>
                    <Image alt='planos' src='/orange-flower.png' width={41} height={34} />
                    <p className='font-medium text-white text-base sm:text-lg text-center mt-5 leading-[1.36]'>Baños con espejos y apliques contemporáneos.</p>
                </div>
                <div className='pb-7 bg-[#FAAE36] rounded-[30px] min-h-[224px] flex flex-col justify-start items-center px-5 pt-9 max-w-[276px]'>
                    <Image alt='planos' src='/orange-flower.png' width={41} height={34} />
                    <p className='font-medium text-white text-base sm:text-lg text-center mt-5 leading-[1.36]'>Amplios vestidores en la mayoría de las unidades.</p>
                </div>
                <div className='pb-7 bg-[#FAAE36] rounded-[30px] min-h-[224px] flex flex-col justify-start items-center px-5 pt-9 max-w-[276px]'>
                    <Image alt='planos' src='/orange-flower.png' width={41} height={34} />
                    <p className='font-medium text-white text-base sm:text-lg text-center mt-5 leading-[1.36]'>Plantas abiertas de esmerado
diseño, con techos de 9 pies
de altura.</p>
                </div>

            </div>


        </div>
    )
}
