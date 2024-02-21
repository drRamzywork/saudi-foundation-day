import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { appWithTranslation } from "next-i18next";
import Router from "next/router";
import Loader from "@/components/Loader";

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 3000 milliseconds = 3 seconds

    // Cleanup function to clear the timer if the component unmounts before the timer finishes
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      {loading && <Loader loading={loading} />}
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App);
