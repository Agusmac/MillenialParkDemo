import Image from 'next/image'
import React from 'react'

export default function SeventhDiv() {
    return (
        <div className=' mb-16 sm:mb-32'>
            <h2 className=' mb-20 md:mb-40 max-w-[820px] text-[#E37830] mx-auto text-center px-[3vw] sm:px-0 text-2xl sm:text-3xl md:text-4xl xl:text-5xl'><span className='font-medium'>Asegurá tu inversión</span> en esta comunidad
                de <span className='font-medium'>excelente retorno en dólares</span></h2>

            <div className='mx-auto max-w-[1240px] py-10 md:py-16 bg-[#F7F7F7] md:rounded-[55px]'>
                <h3 className='mx-auto text-center text-[#E37830] font-medium text-3xl mb-10 px-6 md:px-0'>Cuenta con amenities diferenciales y de valor</h3>
                <div className='grid grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-8 px-4 sm:px-8 md:px-[92px] mb-8 md:mb-16'>
                    <div className="bg-[#e7f3f2] flex flex-col items-center pt-[34px] rounded-[13px] pb-[34px] sm:pb-0 sm:h-[293px]">
                        <Image className=' h-20 sm:h-[125px] w-auto' alt='mascotas' src='/green-grid/dog.png' width={176} height={125} />
                        <p className='text-center text-base sm:text-xl text-[#3D3D3D] mt-10'>Parque para perros</p>
                    </div>
                    <div className="bg-[#e7f3f2] flex flex-col items-center pt-[34px] rounded-[13px] pb-[34px] sm:pb-0 sm:h-[293px]">
                        <Image className='h-20 sm:h-[125px] w-auto' alt='mascotas' src='/green-grid/pool.png' width={186} height={125} />
                        <p className='text-center text-base sm:text-xl text-[#3D3D3D] mt-10'>Lujosa piscina estilo resort</p>
                    </div>
                    <div className="bg-[#e7f3f2] flex flex-col items-center pt-[34px] rounded-[13px] pb-[34px] sm:pb-0 sm:h-[293px] px-4">
                        <Image className='h-20 sm:h-[125px] w-auto' alt='mascotas' src='/green-grid/tennis.png' width={152} height={130} />
                        <p className='text-center text-base sm:text-xl text-[#3D3D3D] mt-10'>Cancha de tenis</p>
                    </div>
                    <div className="bg-[#e7f3f2] flex flex-col items-center pt-[34px] rounded-[13px] pb-[34px] sm:pb-0 sm:h-[293px] px-4">
                        <Image className='h-20 sm:h-[125px] w-auto' alt='mascotas' src='/green-grid/kids-park.png' width={140} height={164} />
                        <p className='text-center text-base sm:text-xl text-[#3D3D3D] mt-10'>Parque infantil moderno con área de juegos</p>
                    </div>
                    <div className="bg-[#e7f3f2] flex flex-col items-center pt-[34px] rounded-[13px] pb-[34px] sm:pb-0 sm:h-[293px] px-4">
                        <Image className='h-20 sm:h-[125px] w-auto' alt='mascotas' src='/green-grid/yoga.png' width={204} height={141} />
                        <p className='text-center text-base sm:text-xl text-[#3D3D3D] mt-10'>Centro de fitness totalmente equipado </p>
                    </div>
                    <div className="bg-[#e7f3f2] flex flex-col items-center pt-[34px] rounded-[13px] pb-[34px] sm:pb-0 sm:h-[293px] px-4">
                        <Image className='h-20 sm:h-[125px] w-auto' alt='mascotas' src='/green-grid/tree.png' width={120} height={132} />
                        <p className='text-center text-base sm:text-xl text-[#3D3D3D] mt-10'>Parque sobre el lago con pista de running</p>
                    </div>
                    <div className="bg-[#e7f3f2] flex flex-col items-center pt-[34px] rounded-[13px] pb-[34px] sm:pb-0 sm:h-[293px] px-4">
                        <Image className='h-20 sm:h-[125px] w-auto' alt='mascotas' src='/green-grid/shopping.png' width={151} height={131} />
                        <p className='text-center text-base sm:text-xl text-[#3D3D3D] mt-10 capitalize '>Tiendas y restaurants</p>
                    </div>
                    <div className="bg-[#e7f3f2] flex flex-col items-center pt-[34px] rounded-[13px] pb-[34px] sm:pb-0 sm:h-[293px] px-4">
                        <Image className='h-20 sm:h-[125px] w-auto' alt='mascotas' src='/green-grid/reading.png' width={141} height={142} />
                        <p className='text-center text-base sm:text-xl text-[#3D3D3D] mt-10'>Elegante Club House, perfecto para celebrar eventos</p>
                    </div>
                </div>

                <h2 className=' text-[#1A6662] mx-auto text-center px-[3vw] sm:px-0 text-xl md:text-2xl lg:text-[28px]'>Todo esto incrementando el <span className='font-medium text-2xl md:text-[28px] lg:text-[38px] mx-1'>VALOR</span> y haciendo una <span className='font-medium text-2xl md:text-[28px] lg:text-[38px] mx-1'>DIFERENCIA</span> en su inversión.</h2>
                {/* <span className='font-medium'> */}
            </div>

        </div>
    )
}
