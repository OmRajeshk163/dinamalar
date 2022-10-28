import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ad.module.css";
import AdSense from "react-adsense";

const Ad = (props) => {
  useEffect(() => {
    (adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  return (
    <div style={{ height: "auto" }}>
      {/* <AdSense.Google
        client="ca-pub-7325550331393221"
        slot="6289511602"
        style={{ display: "block" }}
        format="auto"
        responsive="true"
        layoutKey="-82+dk+2t+2-3e"
      /> */}

      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-82+dk+2t+2-3e"
        data-ad-client="ca-pub-7325550331393221"
        data-ad-slot="6289511602"
      ></ins>
    </div>
    // <a href="/" target="_blank">
    //   <div className={styles.adContainer}>Google Ad</div>
    // </a>
  );
};

Ad.propTypes = {};

export default Ad;
