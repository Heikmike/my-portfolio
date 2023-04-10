import styles from './Main.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1 className={styles.title}>Hi,<br /> I'm Heikel.</h1>
                <p className={styles.description}>Frontend developer<br />and Computer Science student at
                    <Link href="https://epfl.ch" target="_blank">
                        <Image
                            src="/epfl.png"
                            alt="EPFL"
                            width={95}
                            height={30}
                            className={styles.epfl}
                        />
                    </Link>
                </p>
            </div>
            <div className={styles.image}>
                <Image src="/minecraftLogo.svg" alt="Heikel" width={500} height={500} />
            </div>
        </div>
    )
}
