import React from "react";
import Image from "next/image";
import Link from "next/link";

const DinamalarLogo = () => {
  const src = `https://rss.dinamalar.com/internal/dmrenglishlogonewinner.png`;
  return (
    <Link href="/0">
      <div style={{ height: "2rem", width: "100%", position: "relative" }}>
        <Image
          unoptimized={true}
          alt={"dinamalar Logo"}
          src={src}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </Link>
  );
};

export default DinamalarLogo;
