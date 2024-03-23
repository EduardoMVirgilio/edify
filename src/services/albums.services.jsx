export const getAlbumsByArtist = async (token, artist) => {
  let allAlbums = [];
  let offset = 0;
  const limit = 50;

  while (true) {
    const dataAlbum = new URLSearchParams({
      include_groups: "album,single,compilation,appears_on",
      offset: offset,
      limit: limit,
      locale: "es-ES,es",
      q: 0.7,
    });
    let endpoint = `${import.meta.env.VITE_API}/artists/${artist}`;
    endpoint += `/albums?${dataAlbum.toString()}`;
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const request = await fetch(endpoint, config);
    const response = request.ok ? await request.json() : null;

    if (!response || !response.items || response.items.length === 0) {
      break; // No hay más álbumes
    }

    allAlbums = allAlbums.concat(
      response.items.map(
        ({ id, images, name, release_date, total_tracks, external_urls }) => ({
          id,
          images: images[0].url,
          name,
          release_date: new Date(release_date),
          total_tracks,
          url: external_urls.spotify,
        })
      )
    );

    offset += limit;
  }

  return allAlbums
    .sort((a, b) => {
      return b.release_date - a.release_date;
    })
    .filter(({ total_tracks }) => total_tracks >= 5);
};
