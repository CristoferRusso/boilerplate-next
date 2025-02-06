export default async function handler(req, res) {
  const query = `*[_type == "news"] | order(date desc) { _id, title, date, content, image}`;
  const api = `https://9djqbyoa.api.sanity.io/v2022-03-07/data/query/production?query=${encodeURIComponent(query)}`;
  
  try {
    const response = await fetch(api);
    const data = await response.json(); // Converte la risposta in JSON
    res.status(200).json(data); // Ritorna i dati al client
  } catch (error) {
    res.status(500).json({ error: "Errore nel recupero dei dati" }); // Gestisce gli errori
  }
}
