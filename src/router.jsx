import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import Album from "./pages/Album";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "artist/:id", element: <Artist /> },
      { path: "album/:id", element: <Album /> },
    ],
  },
]);
