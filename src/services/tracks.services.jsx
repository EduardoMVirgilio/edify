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

export const getLyricBySong = async (track, artist) => {
  let data = new URLSearchParams();
  data.append("apikey", import.meta.env.VITE_KEY);
  data.append("q_artist", artist);
  data.append("q_track", track);
  data.append("page_size", "100");
  data.append("page", "1");
  data.append("f_has_lyrics", "true");

  let endpoint = `${import.meta.env.VITE_PROXY}${import.meta.env.VITE_MUSIX}`;
  endpoint += `/track.search?`;
  endpoint += data.toString();
  const req = await fetch(endpoint);
  const res = await req.json();
  const track_id = res.message.body.track_list[0].track.track_id;
  data = new URLSearchParams();
  data.append("apikey", import.meta.env.VITE_KEY);
  data.append("track_id", track_id);
  endpoint = `${import.meta.env.VITE_PROXY}${import.meta.env.VITE_MUSIX}`;
  endpoint += `/track.lyrics.get?`;
  endpoint += data.toString();
  const reqLyric = await fetch(endpoint);
  const resLyric = await reqLyric.json();
  return resLyric.message.body.lyrics.lyrics_body;
};
