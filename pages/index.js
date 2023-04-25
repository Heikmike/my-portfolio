import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import TopBar from '../components/TopBar'
import Main from '../components/Main'
import ParticlesBg from '../components/ParticlesBg'

export default function Home() {
    return (
        <>
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.main}>
                <ParticlesBg />
                <TopBar />
                <Main />
            </main>
        </>
    )
}
