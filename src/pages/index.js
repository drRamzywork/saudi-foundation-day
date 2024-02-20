import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Home/header";
import BgSection from "@/components/Home/BgSection";
import Footer from "@/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>يوم التأسيس </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="يوم التأسيس السعودي" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="يوم التأسيس السعودي" />
        <meta property="og:description" content="يوم التأسيس السعودي " />
        <meta
          property="og:image"
          content="https://zamakanweb1.suwa.io/logo_mobile_footer.png"
        />
        <meta property="og:url" content="https://zamakanweb1.suwa.io" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="يوم التأسيس السعودي" />
        <meta name="twitter:description" content="يوم التأسيس السعودي " />
        <meta
          name="twitter:image"
          content="https://zamakanweb1.suwa.io/logo_mobile_footer.png"
        />
      </Head>

      <main className={styles.main}>
        <Header />
        <BgSection />
        <Footer />
      </main>
    </>
  );
}
