import React, { useState } from "react";
import { getArtists } from "../services/artists.service";
import { useQuery } from "@tanstack/react-query";
import useTokenStore from "../hooks/useToken";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
const Home = () => {
  const token = useTokenStore((state) => state.token);
  const [page, setPage] = useState(0);
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["artist", page],
    queryFn: () => getArtists(token, page),
  });
  return (
    <>
      {isFetching && <p>Esta en fetch {isFetching}</p>}
      {isLoading && <p>Esta cargando</p>}
      {!isLoading && data.length > 0 && (
        <ul>
          {data.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
      <form onSubmit={(e) => e.preventDefault()}>
        <button
          type="button"
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page < 0}
        >
          <MdArrowLeft />
        </button>
        <span>{page}</span>
        <button
          type="button"
          onClick={() => setPage((old) => Math.min(old + 1, 18))}
        >
          <MdArrowRight />
        </button>
      </form>
    </>
  );
};

export default Home;
