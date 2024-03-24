export const getTracksByAlbum = async (token, album) => {
  const data = new URLSearchParams();
  data.append("offset", "0");
  data.append("limit", "3");
  let endpoint = `${import.meta.env.VITE_API}/albums/${album}`;
  endpoint += `/tracks?${data.toString()}`;
  const config = {};
  config.headers = {};
  config.method = "GET";
  config.headers["Authorization"] = `Bearer ${token}`;
  let tracks = [];
  while (endpoint) {
    const response = await fetch(endpoint, config);
    const data = await response.json();
    const items = data.items.map(
      ({ name, track_number, duration_ms, preview_url }) => ({
        name,
        duration: (duration_ms / 60000).toFixed(2),
        preview: preview_url,
        track_number,
      })
    );
    tracks = tracks.concat(items);
    endpoint = data.next;
  }
  return tracks;
};
