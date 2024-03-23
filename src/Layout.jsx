import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import useTokenStore from "./hooks/useToken";

const Layout = () => {
  useTokenStore();
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
