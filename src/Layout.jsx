import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import useTokenStore from "./hooks/useToken";
import usePage from "./hooks/usePage";
import { useEffect } from "react";

const Layout = () => {
  useTokenStore();
  const { pathname } = useLocation();
  const reset = usePage((state) => state.reset);
  useEffect(() => reset(), [pathname]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
