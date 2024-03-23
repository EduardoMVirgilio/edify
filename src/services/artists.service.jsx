export const getArtists = async (token, page) => {
  const data = new URLSearchParams({
    q: 'genre:"argentine rock"',
    type: "artist",
    locale: "es-ES",
    offset: Number(page) * 6,
    limit: 6,
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

export const getArtist = async (token, id) => {
  const endpoint = `${import.meta.env.VITE_API}/artists/${id}`;
  const config = {};
  config.headers = {};
  config.method = "GET";
  config.headers["Authorization"] = `Bearer ${token}`;
  const request = await fetch(endpoint, config);
  return request.ok ? await request.json() : null;
};
