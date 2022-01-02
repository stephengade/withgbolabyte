import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Loading from "../components/Preloader/Preloader";
import Cursor from "../components/Cursor/Cursor";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <Cursor />
      <Loading loading={loading} />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
