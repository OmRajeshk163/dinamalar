import axios from "axios";

export default async function handler(req, res) {
  const {
    newsid,
    cat = "",
    yourname = "",
    yourmailid = "",
    Message = "",
  } = req.body.params;

  if (req.method == "POST") {
    if (newsid.length > 0) {
      const params = `?newsid=${newsid}&cat=${cat}&yourname=${yourname}&yourmailid=${yourmailid}&Message=${Message}`;
      const postCommentUrl = `https://rss.dinamalar.com/internal/post-comment.asp${params}`;
      const response = await axios.post(postCommentUrl, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("serverResponseresponse", response.data);
      return res.status(200).json(response.data);
    } else {
      return res.status(200).json([]);
    }
  }
}
