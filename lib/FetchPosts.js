export async function fetchPosts() {
  const api = process.env.URL+`/api/getSanityData`; // URL assoluto
  const response = await fetch(api);
  const data = await response.json();

  return data.result; // Ritorna solo i dati necessari
}
  