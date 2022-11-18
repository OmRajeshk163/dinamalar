import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import CategoryContainer from "../../components/modules/categoryDetails/CategoryContainer";
import axios from "axios";
import Head from "next/head";
import { Typography } from "@mui/material";
import Loading from "../../components/elements/loading";
import { baseUrl } from "../../components/modules/constants";
import ProgressBar from "../../components/elements/progressbar";

const CategoryDetails = ({ feedDetails }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [progress, setProgress] = useState({ value: 0, show: true });
  useEffect(() => {
    let interval = null;
    if (feedDetails.status !== 200) {
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
    } else if (feedDetails.status === 200) {
      setProgress((prev) => ({ ...prev, value: 100 }));
      setTimeout(() => setProgress((prev) => ({ ...prev, show: false })), 2000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [feedDetails, progress.value]);

  const isValidItem = () => {
    const item = feedDetails.data?.item;
    if (
      item &&
      Object.keys(item).length === 0 &&
      Object.getPrototypeOf(item) === Object.prototype
    ) {
      return false;
    }
    return true;
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>
          {feedDetails.data?.title ?? "Dinamalar| Tamil daily newspaper"}
        </title>
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
        {!isLoading && isValidItem() && (
          <CategoryContainer selectedNews={feedDetails.data.item} />
        )}
        {isLoading && <Loading />}
        {!isLoading && !isValidItem() && (
          <Typography sx={{ textAlign: "center", m: 2 }}>
            Something Went Wrong
          </Typography>
        )}
      </main>
    </div>
  );
};

export default CategoryDetails;

export async function getServerSideProps(context) {
  const newsFeedsDetailsAPi = `${baseUrl}/api/newsFeedDetails`;
  const params = { feedId: context.query.feedid };
  let feedDetails = {};
  try {
    const newsFeedsDetailsRes = await axios.get(newsFeedsDetailsAPi, {
      params,
      responseType: "json",
      "content-type": "text/html; Charset=utf-8",
      timeout: 15000,
    });
    feedDetails = {
      data: JSON.parse(JSON.stringify(newsFeedsDetailsRes.data)),
      status: newsFeedsDetailsRes.status,
      statusText: newsFeedsDetailsRes.statusText,
    };
  } catch (error) {
    console.error("feedDetailsError", error);
    feedDetails = { data: { item: {} }, status: 500 };
  }

  return {
    props: { feedDetails: feedDetails },
  };
}
