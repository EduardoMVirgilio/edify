import React from "react";
import useTokenStore from "../hooks/useToken";
import { useQueries } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { getAlbum } from "../services/albums.services";
import { getTracksByAlbum } from "../services/tracks.services";
import OneAlbum from "../components/OneAlbum";
import TracksList from "../components/TracksList";

const Album = () => {
  const token = useTokenStore((state) => state.token);
  const params = useParams();
  const [album, tracks] = useQueries({
    queries: [
      {
        queryKey: ["album", params, token],
        queryFn: () => getAlbum(token, params.id),
      },
      {
        queryKey: ["tracks", params, token],
        queryFn: () => getTracksByAlbum(token, params.id),
      },
    ],
  });
  return (
    <>
      {(album.isLoading || tracks.isLoading) && <Loader />}
      {!album.isLoading && !tracks.isLoading && (
        <>
          <OneAlbum {...album.data} />
          <TracksList tracks={tracks.data} />
        </>
      )}
    </>
  );
};

export default Album;
