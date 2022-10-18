import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FeedList from "../components/modules/home/FeedList";
import Carousel from "../components/elements/Carousel";
import Link from "next/link";

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
        {/* <Carousel slidesToShow={1.5} /> */}
        <iframe
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          // src="https://drive.google.com/file/d/1JOZBkMwOllSNg7ameXnAj1dlagusMeux/preview"
          src="https://drive.google.com/file/d/1GAsx81RWr8uAEaaUSgSzifuHYOWgaJo0/view"
          width="640"
          height="480"
          allow="autoplay"
        />
      </main>
    </div>
  );
}
