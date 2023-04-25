import styles from './styles/ErrorPage.module.css'
import Link from 'next/link'

export default function ErrorPage() {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.home}></Link>
            <h1 className={styles.title}>This page is not available yet.</h1>
            <p className={styles.text}>
                I&apos;m still working on this website, so do not hesitate to come back later.
            </p>
            <p className={styles.text}>
                If you have any suggestion(s), please&nbsp;<p className={styles.contact}>contact</p>&nbsp;me.
            </p>
        </div >
    )
}
