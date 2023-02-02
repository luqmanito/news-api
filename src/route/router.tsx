import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NewsDetailPage from "../pages/news-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/news-detail/:id",
    element: <NewsDetailPage />,
  },
]);

export default router
