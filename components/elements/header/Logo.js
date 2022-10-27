import React from "react";
import Image from "next/image";

const DinamalarLogo = () => {
  const src = `https://rss.dinamalar.com/internal/dmrenglishlogonewinner.png`;
  return (
    <div style={{ height: "2rem", width: "100%", position: "relative" }}>
      <Image
        unoptimized={true}
        alt={"dinamalar Logo"}
        src={src}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default DinamalarLogo;
