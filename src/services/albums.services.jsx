export const getAlbumsByArtist = async (token, artist) => {
  const dataAlbum = new URLSearchParams();
  dataAlbum.append("include_groups", "album");
  dataAlbum.append("offset", "0");
  dataAlbum.append("offset", "50");
  let endpoint = `${import.meta.env.VITE_API}/artists/${artist}`;
  endpoint += `/albums?${dataAlbum.toString()}`;
  const config = {};
  config.headers = {};
  config.method = "GET";
  config.headers["Authorization"] = `Bearer ${token}`;
  let albums = [];
  while (endpoint) {
    const response = await fetch(endpoint, config);
    const data = await response.json();
    const items = data.items.map(
      ({ id, name, images, release_date, total_tracks, external_urls }) => ({
        id,
        name,
        image: images[0].url,
        total_tracks,
        release_date: new Date(release_date),
        url: external_urls.spotify,
      })
    );
    albums = albums.concat(items);
    endpoint = data.next;
  }
  return albums
    .sort((a, b) => {
      return b.release_date - a.release_date;
    })
    .filter(({ total_tracks }) => total_tracks >= 5);
};

export const getAlbum = async (token, id) => {
  const config = {};
  config.headers = {};
  config.method = "GET";
  config.headers["Authorization"] = `Bearer ${token}`;
  const endpoint = `${import.meta.env.VITE_API}/albums/${id}`;
  const response = await fetch(endpoint, config);
  const data = await response.json();
  const result = {};
  result.id = data.id;
  result.artist = {};
  result.artist.id = data.artists[0].id;
  result.artist.url = data.artists[0].external_urls.spotify;
  result.artist.name = data.artists[0].name;
  result.artist.id = data.artists[0].id;
  result.url = data.external_urls.spotify;
  result.release_date = new Date(data.release_date).toLocaleDateString();
  result.total_tracks = data.total_tracks;
  result.image = data.images[0].url;
  result.name = data.name;
  return result;
};
