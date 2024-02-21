import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'


const BgSection = () => {
  return (
    <section id='person' className={styles.person}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className={styles.img_container}>
        <Image src={'/assets/imgs/person.png'} width={566} height={561.62} />
      </motion.div>
    </section>
  )
}

export default BgSection