// import Footer from "@/Footer";
// import Header from "@/components/Home/header";
// import React from "react";
// import styles from './index.module.scss'
// import Image from "next/image";
// import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { motion } from "framer-motion";

// const Videos = () => {
//   const { t } = useTranslation('common');

//   const videoData = Array.from({ length: 18 }).map((_, index) => {
//     const number = index + 1;
//     return {
//       scene: t(`${number}Scene`),
//       url: t(`${number}Url`),
//     };
//   });

//   return (
//     <section id='videos' className={styles.videos}>

//       <Header />

//       <div className="container">

//         {videoData.map((video, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className={styles.video_container}
//           >
//             <div className={styles.icon_container}>
//               <Image src={'/assets/svgs/icons_line.svg'} width={217} height={13} />
//             </div>
//             <div className={styles.title}>
//               <p>
//                 {t(`${index + 1}Scene`)}
//               </p>
//             </div>
//             <div className={styles.video}>
//               <iframe
//                 width="560"
//                 height="315"
//                 src={video.url} // Ensure this URL does not contain autoplay-enabling query parameters
//                 title="Video player"
//                 allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </motion.div>
//         ))}
//       </div>


//       <Footer />


//     </section>
//   );
// };

// export default Videos;


// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// }



import React, { useRef, useState } from "react";
import Footer from "@/Footer";
import Header from "@/components/Home/header";
import styles from './index.module.scss';
import Image from "next/image";
import { useTranslation } from 'next-i18next';
import { motion } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

const Videos = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRefs = useRef([]);

  const videoData = Array.from({ length: 18 }).map((_, index) => {
    const number = index + 1;
    return {
      scene: t(`${number}Scene`),
      url: `${t(`${number}Url`)}?autoplay=1`,
    };

  });

  const handleVideoSelect = (index) => {
    setSelectedVideo(index);
    if (videoRefs.current[index]) {
      const videoElement = videoRefs.current[index];
      videoElement.play().then(() => {
        videoElement.pause();
        videoElement.currentTime = 0;
      }).catch(error => console.error("Video play failed", error));
    }
  };



  return (
    <section id='videos' dir={router.locale === 'ar' ? 'rtl' : 'ltr'} className={styles.videos}>

      <Header />

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
            <div
              className={styles.title}
              onClick={() => handleVideoSelect(index)} // Set this video as selected when the text is clicked
            >
              <p>
                {video.scene}
              </p>
            </div>
            {selectedVideo === index && (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }} className={styles.video}>
                <video
                  ref={el => videoRefs.current[index] = el} // Assign ref to each video
                  width="560"
                  height="315"
                  controls
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

              </motion.div>
            )}
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




