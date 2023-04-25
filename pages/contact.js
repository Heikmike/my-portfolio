import styles from '@/styles/Contact.module.css'
import ContactForm from '../components/ContactForm'
import TopBar from '../components/TopBar'
import { motion } from 'framer-motion'
import ContactDetails from '@/components/ContactDetails'

export default function Contact() {
    return (
        <>
            <TopBar />
            <motion.div
                className={styles.container}
            >
                <div className={styles.content}>
                    <ContactForm />
                    <ContactDetails />
                </div>
            </motion.div >
        </>
    )
}
