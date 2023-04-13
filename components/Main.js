import styles from './styles/Main.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'
import { saveAs } from "file-saver";

export default function Main() {
    const [buttonText, setButtonText] = useState('Resume')

    function saveFile() {
        saveAs("@/public/CV_jebali.pdf", "resume.pdf")
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1 className={styles.title}>Hi,<br /> I&apos;m{' '}
                        <TypeAnimation
                            sequence={[
                                700,
                                'Heikel.',
                            ]}
                            cursor={true}
                            repeat={1}
                            wrapper="span"
                            speed={10}
                            style={{ color: 'lightgoldenrodyellow' }}
                        />
                    </h1>
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
                    <button
                        className={styles.button}
                        onClick={saveFile}
                        onMouseEnter={() => setButtonText('Click me!')}
                        onMouseLeave={() => setButtonText('Resume')}
                    >
                        {buttonText}
                    </button>
                </div>
                <div className={styles.image}>
                    <Image
                        src="/minecraftLogo.svg"
                        alt="Heikel"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <hr className={styles.hr} />
        </>
    )
}
