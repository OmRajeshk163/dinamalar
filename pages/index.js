import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import FeedList from "../components/modules/home/FeedList";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/0");
  }, []);
  return (
    // <div className={styles.container}>
    //   <Head>
    //     <title>Dinamalar | An Indian Tamil daily newspaper.</title>
    //     <meta
    //       name="description"
    //       content="Dinamalar is an Indian Tamil daily newspaper."
    //     />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <main className={styles.main}>
    //     <FeedList />
    //     {/* <Carousel slidesToShow={1.5} /> */}
    //   </main>
    // </div>
    <></>
  );
}
