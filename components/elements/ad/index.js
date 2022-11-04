import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ad.module.css";

const Ad = (props) => {
  //   useEffect(() => {
  //     (adsbygoogle = window.adsbygoogle || []).push({});
  //   }, []);
  return (
    // <div style={{ height: "auto" }}>
    //   <ins
    //     className="adsbygoogle"
    //     style={{ display: "block" }}
    //     data-ad-format="fluid"
    //     data-ad-layout-key="-82+dk+2t+2-3e"
    //     data-ad-client="ca-pub-7325550331393221"
    //     data-ad-slot="6289511602"
    //   ></ins>
    // </div>
    <a href="/0" target="_blank">
      <div className={styles.adContainer}>Google Ad</div>
    </a>
  );
};

Ad.propTypes = {};

export default Ad;
