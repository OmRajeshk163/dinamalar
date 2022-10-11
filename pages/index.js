import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FeedList from "../components/modules/home/FeedList";

export default function Home() {
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
        <FeedList />
      </main>
    </div>
  );
}