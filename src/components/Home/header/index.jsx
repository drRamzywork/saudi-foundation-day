import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const router = useRouter();


  return (
    <header id='header' className={styles.header}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} className={styles.logo_container}>
          <Link href={'/'} className={styles.logo}>
            {router.pathname === '/' ?

              <Image width={528} height={452} src={'/assets/svgs/logo.svg'} />
              :
              <Image width={528} height={452} src={'/assets/svgs/logo_dark.svg'} />
            }

          </Link>

        </motion.div>

        {router.pathname === '/' &&
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={styles.languages_container}>
            <a href={`/ar/videos`} className={styles.lang} locale="ar" passHref>
              <Image width={50} height={50} src={'/assets/svgs/ar_flag.svg'} />
            </a>
            <a href={`/en/videos`} className={styles.lang} locale="en" passHref>
              <Image width={50} height={50} src={'/assets/svgs/en_flag.svg'} />
            </a>
            <a href={`/fr/videos`} className={styles.lang} locale="fr" passHref>
              <Image width={50} height={50} src={'/assets/svgs/fr_flag.svg'} />
            </a>
            <a href={`/es/videos`} className={styles.lang} locale="es" passHref>
              <Image width={50} height={50} src={'/assets/svgs/es_flag.svg'} />
            </a>
            <a href={`/ru/videos`} className={styles.lang} locale="ru" passHref>
              <Image width={50} height={50} src={'/assets/svgs/ru_flag.svg'} />
            </a>
          </motion.div>
        }
      </div>
    </header>
  )
}

export default Header