import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='bg-[#F5F5F5] w-full relative xl:-left-14 sm:rounded-[20px]'>
        <div className='relative flex flex-col lg:flex-row justify-center ml-auto'>

          <div className='bg-[#E37830] pb-20 lg:max-w-[535px] text-white rounded-t-[20px] relative pt-[37px] flex flex-col items-center'>
            <Image quality={100} alt='president' src='/president.png' width={179} height={179} />
            <p className='mt-5 text-2xl font-medium'>Rubén Kaufman</p>
            <p className='text-lg uppercase '>Presidente de Mir Developments</p>
            <div className='my-5 h-[2px] bg-white w-3/4'></div>
            <p className='text-xl font-medium'>Tel | +54 11 5129-6870 <br />
              <a href="https://wa.link/ogdzeu"> Whatsapp | +1 786-488-0410  </a> <br />
              <a href="mailto:rkaufman@mirdevelopments.com">rkaufman@mirdevelopments.com</a></p>
            <div className='my-5 h-[2px] bg-white w-3/4'></div>
            <p className='text-xl italic w-3/4 mx-auto text-center'>Más de 40 años de experiencia desarrollando propiedades en Sudamérica, Miami, Orlando.</p>
          </div>

          <div className='px-8 sm:px-16 py-20'>
            <div className='flex justify-end mb-7'><a href="https://wa.link/ogdzeu"><Image className='relative' quality={100} alt='whatsapp logo' src='/whatsapp.png' width={88} height={88} /></a></div>
            <p className='font-medium text-xl mb-7'><span className='text-2xl text-[#1A6662] '>Dirección</span> <br />
              18851 NE 29th Ave, Suite 402 Miami, Florida USA, 33180</p>
            <div className='flex justify-between items-end mb-10'>
              <div><Image className='relative -top-2' alt='president' src='/logo-footer.png' width={190} height={30} /></div>
              <div><Image alt='president' src='/logo-footer-2.png' width={209} height={86} /></div>
            </div>
            <div className='my-10 h-[2px] bg-[#1A6662]'></div>
            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
              <div className='flex-1 flex gap-2'>
                <a href="https://www.instagram.com/milleniaparkorlandooficial/?igshid=MzRlODBiNWFlZA%3D%3D"><Image alt='insta-icon' quality={100} src='/insta-icon.svg' width={28} height={28} /></a>
                <a href="https://www.facebook.com/milleniaparkorlandooficial?mibextid=LQQJ4d"><Image alt='face-icon' quality={100} src='/face-icon.svg' width={30} height={29} /></a>
              </div>
              <a href={'https://milleniaparkorlando.com/es/'}>
                <div className='flex-1 text-xl font-medium text-[#E37830]'>milleniaparkorlando.com/es</div>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
