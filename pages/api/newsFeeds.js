export default async function handler(req, res) {
  const response = await fetch(`https://stat.dinamalar.com/sample_json.php`);
  const data = await response.json();
  return res.status(200).json(data);
}
