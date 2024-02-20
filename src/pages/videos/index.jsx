import Footer from "@/Footer";
import Header from "@/components/Home/header";
import React from "react";
import styles from './index.module.scss'
import Image from "next/image";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { motion } from "framer-motion";

const Videos = () => {
  const { t } = useTranslation('common');

  const videoData = Array.from({ length: 18 }).map((_, index) => {
    const number = index + 1;
    return {
      scene: t(`${number}Scene`),
      url: t(`${number}Url`),
    };
  });

  return (
    <section id='videos' className={styles.videos}>

      <Header />

      {/* <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }} className={styles.video_container}>
        <div className={styles.icon_container}>
          <Image src={'/assets/svgs/icons_line.svg'} width={217} height={13} />
        </div>
        <div className={styles.title}>
          <p>{t('firstScene')}</p>
        </div>

        <div className={styles.video}>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

        </div>
      </motion.div>
 */}


      <div className="container">

        {videoData.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={styles.video_container}
          >
            <div className={styles.icon_container}>
              <Image src={'/assets/svgs/icons_line.svg'} width={217} height={13} />
            </div>
            <div className={styles.title}>
              <p>
                {t(`${index + 1}Scene`)}
              </p>
            </div>
            <div className={styles.video}>
              <iframe
                width="560"
                height="315"
                src={video.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        ))}
      </div>


      <Footer />


    </section>
  );
};

export default Videos;


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
