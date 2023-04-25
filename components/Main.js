import styles from './styles/Main.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'
import { saveAs } from "file-saver";
import { motion } from 'framer-motion'

export default function Main() {
    const [buttonText, setButtonText] = useState('Resume')

    function saveFile() {
        saveAs("/CV_jebali.pdf", "resume.pdf")
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
                    <motion.p
                        className={styles.description}
                        initial={{
                            opacity: 0,
                            x: -100,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 1,
                                ease: "easeInOut",
                                delay: 1.3,
                            }
                        }}
                    >
                        Frontend developer<br />and Computer Science student at
                        <Link href="https://epfl.ch" target="_blank">
                            <Image
                                src="/epfl.png"
                                alt="EPFL"
                                width={95}
                                height={30}
                                className={styles.epfl}
                            />
                        </Link>
                    </motion.p>
                    <motion.div
                        className={styles.socials}
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                                ease: "easeInOut",
                                delay: 1.3,
                            }
                        }}
                    >
                        <motion.button
                            className={styles.button}
                            onClick={saveFile}
                            onMouseEnter={() => setButtonText('Go !')}
                            onMouseLeave={() => setButtonText('Resume')}
                            animate={{
                                scale: [1, 1.6, 1.6, 1.6, 1],
                                rotate: [0, 50, -50, 50, 0],
                            }}
                            transition={{
                                duration: .4,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 2
                            }}
                        >
                            {buttonText}
                        </motion.button>

                        <Link
                            href="https://www.linkedin.com/in/heikel-jebali-844ba0202/"
                            target="_blank"
                            className={styles.social}
                        >
                            
                        </Link>
                        <Link
                            href="https://github.com/Heikmike"
                            target="_blank"
                            className={styles.social}
                        >
                            
                        </Link>
                    </motion.div>
                </div>
                <motion.div
                    className={styles.image}
                    initial={{
                        opacity: 0,
                        x: -100,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                            ease: "easeInOut",
                            delay: 1.3,
                        }
                    }}
                >
                    <h1></h1>
                </motion.div>
            </div>
        </>
    )
}
