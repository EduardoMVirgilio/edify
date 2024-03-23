import { getArtists } from "../services/artists.service";
import { useQuery } from "@tanstack/react-query";
import useTokenStore from "../hooks/useToken";
import ArtistList from "../components/ArtistList";
import Loader from "../components/Loader";
import usePage from "../hooks/usePage";
import Paginate from "../components/Paginate";
const Home = () => {
  const token = useTokenStore((state) => state.token);
  const page = usePage((state) => state.page);
  const { data, isLoading } = useQuery({
    queryKey: ["artist", page],
    queryFn: () => getArtists(token, page),
  });
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && data.length > 0 && <ArtistList artists={data} />}
      {!isLoading && data.length > 0 && <Paginate />}
    </>
  );
};

export default Home;
