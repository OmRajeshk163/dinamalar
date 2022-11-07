import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ImageCard from "../../elements/imageCard";
import Video from "../../elements/Video.js";
import Audio from "../../elements/audio";
import Link from "next/link";
import axios from "axios";
import { Typography } from "@mui/material";
import { NewsFeeds } from "./helper";
import Loading from "../../elements/loading";
import Carousel from "../../elements/Carousel";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FeedList({ newsFeeds }) {
  // const [newsFeeds, setNewsFeeds] = useState([]);
  const { item } = newsFeeds.data;
  const [isLoading, setIsLoading] = useState(true);

  function chunkSubstr(str, size) {
    const numChunks = Math.ceil(str.length / size);
    const chunks = new Array(numChunks);

    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
      chunks[i] = { text: str.substr(o, size), id: i };
    }

    return chunks;
  }

  useEffect(() => {
    setIsLoading(true);
    try {
      if (newsFeeds.status === 200) {
        setIsLoading(false);
      } else if (newsFeeds.status !== 200) {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("FeedList Error", error);
      setIsLoading(false);
    }
  }, [newsFeeds]);
  console.log("newsFeeds", newsFeeds);

  return (
    <Box sx={{ flexGrow: 1, width: "100%", mt: 5 }}>
      <Grid container spacing={2}>
        {isLoading ? (
          <Grid item xs={12} md={12} lg={12}>
            <Loading />
          </Grid>
        ) : (
          <>
            {item?.length > 0 ? (
              item.map((feed, index) => (
                <Link href={`/category-details/${feed.id}`} key={index}>
                  <Grid item xs={12} md={4} lg={4}>
                    <Item>
                      {feed.photoitems?.length > 0 ? (
                        <Carousel
                          slidesToShow={1.2}
                          slidesToScroll={1}
                          photoitems={feed.photoitems}
                        />
                      ) : (
                        <ImageCard
                          detailUrl={feed.link}
                          src={feed.StoryImage}
                          alt={feed.title}
                          category={feed.categoryDisplay}
                          imgTitle={feed.title}
                          commentscount={feed.commentscount}
                          lastupdated={feed.lastupdated}
                          audio={feed.audio}
                          feedId={feed.id}
                        />
                      )}
                    </Item>
                  </Grid>
                </Link>
              ))
            ) : newsFeeds.status !== 200 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
                  margin: "2rem",
                  width: "100%",
                }}
              >
                <Typography>Something Went Wrong</Typography>
              </div>
            ) : (
              <Grid item xs={12} md={12} lg={12}>
                <Typography sx={{ textAlign: "center", m: 2 }}>
                  No News Found
                </Typography>
              </Grid>
            )}
          </>
        )}
      </Grid>
    </Box>
  );
}
