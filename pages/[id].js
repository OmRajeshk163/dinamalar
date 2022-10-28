import React from "react";
import { useRouter } from "next/router";
import FeedList from "../components/modules/home/FeedList";
import styles from "../styles/Home.module.css";

const Main = () => {
  const router = useRouter();
  const mainId = router.query.id;
  return (
    <main className={styles.main}>
      <FeedList mainId={mainId} />
    </main>
  );
};

export default Main;
