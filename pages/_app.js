import '@/styles/globals.css'
import { motion } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
    return (
        <motion.div
            initial={{
                x: 100,
                opacity: 0,
            }}
            animate={{
                x: 0,
                opacity: 1,
            }}
            key={router.route}>
            <Component {...pageProps} />
        </motion.div>
    )
}
