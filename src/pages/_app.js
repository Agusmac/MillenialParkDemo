import '@/styles/globals.css'

import localFont from 'next/font/local'
 
const Neue = localFont({
  src: [
    {
      path: './Fonts/NeueHaasDisplayRoman.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Fonts/NeueHaasDisplayRomanItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Fonts/NeueHaasDisplayMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Fonts/NeueHaasDisplayLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Fonts/NeueHaasDisplayBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={Neue.className}>
      <Component {...pageProps} />
    </main>
  )
}