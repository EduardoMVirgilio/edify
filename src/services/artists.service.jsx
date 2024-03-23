export const getArtists = async (token, page) => {
  const data = new URLSearchParams({
    q: 'genre:"argentine rock"',
    type: "artist",
    locale: "es-ES",
    offset: page * 20,
    limit: 20,
  });
  const endpoint = `${import.meta.env.VITE_API}/search?${data.toString()}`;
  const config = {};
  config.headers = {};
  config.method = "GET";
  config.headers["Authorization"] = `Bearer ${token}`;
  const request = await fetch(endpoint, config);
  const response = request.ok ? await request.json() : null;
  return response.artists ? response.artists.items : [];
};
