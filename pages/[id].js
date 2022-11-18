import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import FeedList from "../components/modules/home/FeedList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { baseUrl } from "../components/modules/constants";
import ProgressBar from "../components/elements/progressbar";

const Main = ({ newsFeeds }) => {
  const [progress, setProgress] = useState({ value: 0, show: true });
  useEffect(() => {
    let interval = null;

    if (newsFeeds.status !== 200) {
      if (progress.value >= 100) {
        clearInterval(interval);
      } else if (progress.value < 100) {
        interval = setInterval(() => {
          setProgress((prev) => ({
            ...prev,
            value: prev.value < 80 ? prev.value + 10 : 80,
          }));
        }, 1000);
      }
    } else if (newsFeeds.status === 200) {
      setProgress((prev) => ({ ...prev, value: 100 }));
      setTimeout(() => setProgress((prev) => ({ ...prev, show: false })), 2000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [newsFeeds, progress.value]);

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
        {progress.show && (
          <ProgressBar width={progress.value} height="0.45rem" />
        )}
        <FeedList newsFeeds={newsFeeds} />
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
    feedList = JSON.parse(
      JSON.stringify({
        status: newsFeedRes.status,
        statusText: newsFeedRes.statusText,
        data: newsFeedRes.data,
      })
    );
  } catch (error) {
    feedList = JSON.parse(
      JSON.stringify({
        status: error.response.status,
        statusText: error.response.statusText,
        data: { item: [] },
      })
    );
  }

  return {
    props: { newsFeeds: feedList },
  };
}
