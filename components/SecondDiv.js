import Image from 'next/image'
import React from 'react'

export default function SecondDiv() {
    return (
        <div className='mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-16 mb-40'>
            <div className='flex flex-col items-center text-center leading-none'>
                <Image className='' priority src='/Dinero.png' alt='Dinero ilustracion' width={152} height={152}></Image>
                <p className='font-medium text-2xl text-[#1A6662] mt-10 mb-3'>Precios competitivos</p>
                <p className='text-xl'>Propiedades <span className='font-medium'>desde <br /> USD $274,900</span> </p>
            </div>
            <div className='flex flex-col items-center text-center'>
                <Image className='' priority src='/Dinero-billete.png' alt='Dinero ilustracion' width={152} height={152}></Image>
                <p className='font-medium text-2xl text-[#1A6662] mt-10 mb-3'>Renta fija mensual</p>
                <p className='text-xl'>Retornos superiores al <br /> <span className='font-medium'>6% anual en dólares.</span> </p>
            </div>
            <div className='flex flex-col items-center text-center'>
                <Image className='' priority src='/Mano.png' alt='Dinero ilustracion' width={152} height={152}></Image>
                <p className='font-medium text-2xl text-[#1A6662] mt-10 mb-3'>Convertite en inversor</p>
                <p className='text-xl'> Sin viajar a USA.</p>
            </div>
            <div className='flex flex-col items-center text-center'>
                <Image className='' priority src='/moneyRise.png' alt='Dinero ilustracion' width={152} height={152}></Image>
                <p className='font-medium text-2xl text-[#1A6662] mt-10 mb-3 '>Capitalización</p>
                <p className='text-xl'>La mejor inversión en <br /><span className='font-medium'>PRE-CONSTRUCCIÓN.</span> </p>
            </div>
        </div>
    )
}
