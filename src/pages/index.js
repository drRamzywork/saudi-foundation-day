import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Home/header";
import BgSection from "@/components/Home/BgSection";
import Footer from "@/Footer";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
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
        <meta property="og:image" content="/assets/imgs/dark_logo.png" />
        <meta property="og:url" content="https://www.foundingday.org" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="يوم التأسيس السعودي" />
        <meta name="twitter:description" content="يوم التأسيس السعودي " />
        <meta name="twitter:image" content="/assets/imgs/dark_logo.png" />
      </Head>

      <main className={styles.main}>
        <Header />
        <BgSection />
        {router.pathname !== "/" && <Footer />}
      </main>
    </>
  );
}
