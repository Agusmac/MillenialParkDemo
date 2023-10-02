import Head from 'next/head'

import Hero from '../../components/Hero'
import SecondDiv from '../../components/SecondDiv'
import ThirdDiv from '../../components/ThirdDiv'
import FourthDiv from '../../components/FourthDiv'
import FifthDiv from '../../components/FifthDiv'
import SixthDiv from '../../components/SixthDiv'
import SeventhDiv from '../../components/SeventhDiv'
import EighthDiv from '../../components/EighthDiv'
import Footer from '../../components/Footer'



export default function Home() {
  return (
    <>
      <Head>
        <title>Millenial Park Orlando</title>
        <meta name="description" content="Millenial Park Orlando" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Hero />
        <SecondDiv />
        <ThirdDiv />
        <FourthDiv />
        <FifthDiv />
        <SixthDiv />
        <SeventhDiv />
        <EighthDiv />
        <Footer />
      </main>
    </>
  )
}
