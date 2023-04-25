import Link from 'next/link'
import styles from './styles/TopBar.module.css'
import { motion } from 'framer-motion'

export default function TopBar() {
    return (
        <motion.div
            className={styles.container}
            initial={{
                opacity: 0,
                y: -100,
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
            <Link href="/" className={styles.home}></Link>
            <div className={styles.items}>
                <Link href="/about" className={styles.item}>About</Link>
                <Link href="/about" className={styles.item}>Skills</Link>
                <Link href="/about" className={styles.item}>Hobbies</Link>
            </div>
            <Link href="/contact">
                <motion.button
                    className={styles.contact}
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
                    Contact
                </motion.button>
            </Link>
        </motion.div>
    )
}
