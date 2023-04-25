import styles from '@/styles/Contact.module.css'
import ContactForm from '../components/ContactForm'
import TopBar from '../components/TopBar'
import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <>
            <TopBar />
            <motion.div
                className={styles.container}
            >
                <div className={styles.content}>
                    <ContactForm />


                </div>
            </motion.div >
        </>
    )
}
