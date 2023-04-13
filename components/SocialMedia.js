import Link from 'next/link'
import styles from './styles/SocialMedia.module.css'

export default function SocialMedia() {
    return (
        <div className={styles.container}>
            <Link
                href="https://www.linkedin.com/in/heikel-jebali-844ba0202/"
                className={styles.link}
                target="_blank"
            >
                
            </Link>
            <Link
                href="https://github.com/Heikmike"
                className={styles.link}
                target="_blank"
            >
                
            </Link>
        </div>
    )
}
