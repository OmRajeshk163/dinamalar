import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import FeedList from "../components/modules/home/FeedList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { baseUrl } from "../components/modules/constants";

const Main = ({ newsFeeds }) => {
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
        <FeedList mainId={mainId} newsFeeds={newsFeeds} />
      </main>
    </div>
  );
};

export default Main;

export async function getServerSideProps(context) {
  const newsFeedsAPi = `${baseUrl}/api/newsFeeds?mainId=${context.query.id}`;
  let feedList = [];
  try {
    const newsFeedRes = await axios.get(newsFeedsAPi, { timeout: 15000 });
    feedList = JSON.parse(JSON.stringify(newsFeedRes.data.item));
  } catch (error) {
    console.error("feedlistError", err);
    feedList = [];
  }

  return {
    props: { newsFeeds: feedList },
  };
}
