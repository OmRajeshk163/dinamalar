import axios from "axios";
import JSON5 from "json5";

export default async function handler(req, res) {
  const { feedId = 0 } = req.query;
  console.log("resfgsfg", feedId);

  if (req.method === "GET") {
    if (feedId) {
      const feedDetailsUrl = `https://rss.dinamalar.com/internal/detail.asp?id=${feedId}`;
      const response = await axios.get(feedDetailsUrl, {
        responseType: "json",
        headers: {
          "Content-Type": "application/json;Charset=utf-8",
        },
      });
      let feedData = {};
      if (typeof response.data === "string") {
        // working;
        // feedData = JSON.parse(response.data.replace(/[\r\n]/gm, ""));
        feedData = JSON5.parse(response.data.replace(/[\r\n]/gm, ""));
      } else {
        feedData = response.data;
      }
      return res.status(200).json(feedData);
    }
    return res.status(200).json([]);
  }
}
