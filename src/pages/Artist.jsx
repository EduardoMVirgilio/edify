import React from "react";
import useTokenStore from "../hooks/useToken";
import { useQueries } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { getArtist } from "../services/artists.service";
import { getAlbumsByArtist } from "../services/albums.services";
import OneArtist from "../components/OneArtist";
import AlbumsList from "../components/AlbumsList";

const Artist = () => {
  const token = useTokenStore((state) => state.token);
  const params = useParams();
  const [artist, albums] = useQueries({
    queries: [
      {
        queryKey: ["artist", params, token],
        queryFn: () => getArtist(token, params.id),
      },
      {
        queryKey: ["albums", params, token],
        queryFn: () => getAlbumsByArtist(token, params.id),
      },
    ],
  });
  return (
    <>
      {(artist.isLoading || albums.isLoading) && <Loader />}
      {!artist.isLoading && !albums.isLoading && (
        <>
          <OneArtist
            name={artist.data.name}
            image={artist.data.images[0].url}
            id={artist.data.id}
            link={artist.data.external_urls?.spotify}
          />
          <AlbumsList albums={albums.data} />
        </>
      )}
    </>
  );
};

export default Artist;
