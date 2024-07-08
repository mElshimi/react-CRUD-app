import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MasterLayout from "./pages/MasterLayout";
import NotFound from "./pages/NotFound";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Post from "./pages/Posts";
import Details from "./pages/Details";
// import ReactDOM from "react-dom/client";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Post />,
        },
        {
          path: "post",
          element: <Post />,
        },
        {
          path: "post/add",
          element: <Add />,
        },
        {
          path: "post/:id/edit",
          element: <Edit />,
        },
        {
          path: "post/:id",
          element: <Details />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
