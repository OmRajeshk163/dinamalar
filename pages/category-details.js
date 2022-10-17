import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import CategoryHearder from "../components/modules/categoryDetails/CategoryHearder";
import axios from "axios";

const CategoryDetails = () => {
  const [selectedNews, setSelectedNews] = useState([]);

  function chunkSubstr(str, size) {
    console.log("resxdsdrsizeeseerror", str, size);

    const numChunks = Math.ceil(str.length / size);
    const chunks = new Array(numChunks);

    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
      chunks[i] = { text: str.substr(o, size), id: i };
    }

    return chunks;
  }

  useEffect(() => {
    const newsFeedsAPi = "/api/newsFeeds";
    const DESC_LENGTH = 120;
    axios.get(newsFeedsAPi).then((response) => {
      console.log("resxdsdreseerror", response);
      const temp = {
        ...response.data.items[3],
        descritions: chunkSubstr(
          response.data.items[3].description,
          DESC_LENGTH
        ),
      };
      setSelectedNews(temp);
    });
  }, []);
  console.log("selectedNews", selectedNews);

  return (
    <div className={styles.container}>
      <Head>
        <title>Sports | India won by 6 wickets.</title>
        <meta
          name="description"
          content="Dinamalar is an Indian Tamil daily newspaper."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <CategoryHearder selectedNews={selectedNews} />
      </main>
    </div>
  );
};

export default CategoryDetails;
