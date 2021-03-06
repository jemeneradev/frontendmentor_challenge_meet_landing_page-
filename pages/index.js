import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner.js'
import Benefits from '../components/Benefits.js'
import Design from '../components/Design.js'
import Footer from '../components/Footer'
import Separator from '../components/Separator'

export default function Home() {
  return (
    <div className={styles.Home_Container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Separator num="01"/>
      <Benefits />
      <Separator num="02"/>
      <Footer />
      {<Design />}
    </div>
  )
}
