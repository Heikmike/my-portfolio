import styles from './styles/ContactForm.module.css'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSent, setIsSent] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        const data = { name, email, message }
        console.log(data)
        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(data),
        })
        setIsSent(true)
    }

    return (
        <div className={styles.container}>
            {!isSent ?
                (
                    <AnimatePresence>
                        <motion.form
                            className={styles.form}
                            onSubmit={handleSubmit}
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    duration: 1,
                                    delay: 0.5,
                                    ease: "easeInOut",
                                },
                            }}
                            exit={{
                                opacity: 0,
                                // transition: {
                                //     duration: 1,
                                //     ease: "easeInOut",
                                // },
                            }}
                        >
                            <p className={styles.title}>Contact form</p>
                            <label>
                                <p className={styles.inStyle}>Full Name</p>
                                <input
                                    type="text"
                                    placeholder="Heikel Jebali"
                                    className={styles.in}
                                    onChange={e => setName(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                <p className={styles.inStyle}>E-mail</p>
                                <input
                                    placeholder="heikel.jebali@epfl.ch"
                                    type="text"
                                    className={styles.in}
                                    required
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </label>
                            <label>
                                <p className={styles.inStyle}>Message</p>
                                <textarea
                                    className={styles.area}
                                    placeholder="What do you need from me ?"
                                    onChange={e => setMessage(e.target.value)}
                                />
                            </label>
                            <input
                                type="submit"
                                value="Send"
                    disabled={name === '' || email === '' || message === ''}
                                className={styles.submit}
                            />
                        </motion.form>
                    </AnimatePresence>
                ) :
                (
                    <div className={styles.sentContainer}>
                        <motion.h1
                            className={styles.sent}
                            initial={{
                                opacity: 0,
                                y: 100,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.8,
                                    delay: 0.4,
                                    ease: "easeInOut",
                                },
                            }}
                        >
                            Thank you for your message !
                        </motion.h1>
                        <motion.p
                            className={styles.message}
                            initial={{
                                opacity: 0,
                                y: 100,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.8,
                                    delay: 0.4,
                                    ease: "easeInOut",
                                },
                            }}
                        >
                            I&apos;ll answer you as soon as possible.
                        </motion.p>
                    </div>
                )}
        </div>
    );
}
