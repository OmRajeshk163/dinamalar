import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import FeedList from "../components/modules/home/FeedList";
import styles from "../styles/Home.module.css";

const Main = () => {
  const router = useRouter();
  const mainId = router.query.id;

  return (
    <div className={styles.container}>
      <Head>
        <title>Dinamalar | An Indian Tamil daily newspaper.</title>
        <meta
          name="description"
          content="Dinamalar is an Indian Tamil daily newspaper."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <FeedList mainId={mainId} />
      </main>
    </div>
  );
};

export default Main;
