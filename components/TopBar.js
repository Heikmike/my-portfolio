import Link from 'next/link'
import styles from './TopBar.module.css'

export default function TopBar() {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.home}></Link>
            <div className={styles.items}>
                <Link href="/about" className={styles.item}>About</Link>
                <Link href="/about" className={styles.item}>Skills</Link>
                <Link href="/about" className={styles.item}>Hobbies</Link>
            </div>
        </div>
    )
}
