import Link from 'next/link'
import styles from './styles/ContactDetails.module.css'

export default function ContactDetails() {
    return (
        <div className={styles.container}>
            <div className={styles.socials}>
                <Link
                    href="https://www.linkedin.com/in/heikel-jebali-844ba0202/"
                    className={styles.link}
                    target="_blank"
                >
                    
                </Link>
                <Link
                    href="https://github.com/Heikmike"
                    className={styles.link}
                    target="_blank"
                >
                    
                </Link>

            </div>

            <p className={styles.text}><p className={styles.logo}></p>&nbsp;&nbsp;&nbsp;heikel.jebali@epfl.ch</p>
            <p className={styles.text}><p className={styles.logo}></p>&nbsp;&nbsp;&nbsp;+41&nbsp;(0)&nbsp;789656641</p>

        </div>
    )
}
