import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import CategoryHearder from "../components/modules/categoryDetails/CategoryHearder";

const CategoryDetails = () => {
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
        <CategoryHearder />
      </main>
    </div>
  );
};

export default CategoryDetails;
