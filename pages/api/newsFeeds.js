export default async function handler(req, res) {
  const { mainId = 0 } = req.query;
  let mainFeedUrl = "";
  if (mainId == 0) mainFeedUrl = `https://rss.dinamalar.com/internal/main.asp`;
  if (mainId != 0)
    mainFeedUrl = `https://rss.dinamalar.com/internal/main.asp?id=${mainId}`;

  // const response = await fetch(`https://stat.dinamalar.com/sample_json.php`);
  const response = await fetch(mainFeedUrl);
  const data = await response.json();
  return res.status(200).json(data);
}
