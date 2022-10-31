import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import CategoryHearder from "../../components/modules/categoryDetails/CategoryHearder";
import axios from "axios";
import Head from "next/head";
import { Typography } from "@mui/material";
import Loading from "../../components/elements/loading";

const CategoryDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [feedDetail, setFeedDetail] = useState({});

  useEffect(() => {
    const feedId = router.query.feedid;

    if (feedId) {
      setIsLoading(true);
      const newsFeedsDetailsAPi = `/api/newsFeedDetails`;
      const params = { feedId: feedId };
      axios
        .get(newsFeedsDetailsAPi, {
          params,
          responseType: "json",
          "content-type": "text/html; Charset=utf-8",
          timeout: 15000,
        })
        .then((response) => {
          setFeedDetail(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("FeedDetailError", err);
          setFeedDetail({ item: {} });
          setIsLoading(false);
        });
    }
  }, [router.query.feedid]);

  const isValidItem = () => {
    const item = feedDetail?.item;
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
        <title>{feedDetail?.title ?? "Dinamalar| Tamil daily newspaper"}</title>
        <meta
          name="description"
          content="Dinamalar is an Indian Tamil daily newspaper."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {!isLoading && isValidItem() && (
          <CategoryHearder selectedNews={feedDetail.item} />
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
