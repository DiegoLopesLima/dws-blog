import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/Home";
import PostPage from "@/pages/Post";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <PostPage />,
      },
    ],
  },
]);
