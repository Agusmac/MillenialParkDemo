import Image from 'next/image'
import React from 'react'

export default function FifthDiv() {
    return (
        <div className='mb-32'>
            <div className='font-medium text-[40px] sm:text-[48px] text-[#E37830] mx-auto text-center mb-16'><p>Tipo de unidades</p></div>
            {/*  */}
            <div className='mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-16 mb-24'>

                <div className='flex flex-col justify-start items-center'>
                    <div>
                        <div className='flex items-center gap-3 font-light mb-2'>
                            <div className='h-[25px] w-[25px] rounded-full bg-[#EDD6D6]'></div>
                            <p className='text-3xl '>UNIDAD A</p>
                        </div>
                        <div className='bg-[#D9D9D9] h-[2px] w-full max-w-[190px] mb-4'></div>
                        <p className='text-xl'>
                            1 Dormitorio + Estudio <br />
                            1 Baño <br />
                            750 Sq.Ft. / 70 m²
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-center'>
                    <div>
                        <div className='flex items-center gap-3 font-light mb-2'>
                            <div className='h-[25px] w-[25px] rounded-full bg-[#FAAE36]'></div>
                            <p className='text-3xl '>UNIDAD A1</p>
                        </div>
                        <div className='bg-[#D9D9D9] h-[2px] w-full max-w-[190px] mb-4'></div>
                        <p className='text-xl'>
                            1 Dormitorio + Estudio <br />
                            1 Baño <br />
                            825 Sq.Ft. / 77 m²
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-center'>
                    <div>
                        <div className='flex items-center gap-3 font-light mb-2'>
                            <div className='h-[25px] w-[25px] rounded-full bg-[#E37830]'></div>
                            <p className='text-3xl '>UNIDAD B</p>
                        </div>
                        <div className='bg-[#D9D9D9] h-[2px] w-full max-w-[190px] mb-4'></div>
                        <p className='text-xl'>
                            2 Dormitorio + Estudio <br />
                            2 Baño <br />
                            1,023 Sq. Ft. / 95 m²
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-center'>
                    <div>
                        <div className='flex items-center gap-3 font-light mb-2'>
                            <div className='h-[25px] w-[25px] rounded-full bg-[#1A6662]'></div>
                            <p className='text-3xl '>UNIDAD C</p>
                        </div>
                        <div className='bg-[#D9D9D9] h-[2px] w-full max-w-[190px] mb-4'></div>
                        <p className='text-xl'>
                            3 Dormitorio <br />
                            2 Baño <br />
                            1085 SqFt / 101 m² <br />
                            Balcón: <br />
                            65 SqFt / 6 m²
                        </p>
                    </div>
                </div>

            </div>
            <div className='mx-auto max-w-[699px]'>
                <Image alt='planos' src='/Siteplan.png' width={699} height={633}></Image>
            </div>

        </div>
    )
}
