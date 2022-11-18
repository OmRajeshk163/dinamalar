import React, { Fragment } from "react";

const ProgressBar = ({
  width = "0",
  text = "",
  color = "var(--primary)",
  height = "auto",
}) => {
  return (
    <Fragment>
      <div
        style={{
          width: "100%",
          backgroundColor: "lightgrey",
          position: "absolute",
          top: "4.5rem",
          left: 0,
          width: "100%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            width: `${width}%`,
            backgroundColor: color,
            height: height,
            color: "#fff",
            transition: "width 1.5s",
          }}
        >
          {text}
        </div>
      </div>
    </Fragment>
  );
};
export default ProgressBar;
