import { Children, Component, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Components/Home/Home.jsx";
import Root from "./Components/Root/Root.jsx";
import News from "./Components/News/News.jsx";
import Laptop from "./Components/Laptops/Laptop.jsx";
import Mobiles from "./Components/Mobiles/Mobiles.jsx";
import User from "./Components/Users/User.jsx";
import UserDetails from "./Components/SingleUser/UserDetails/UserDetails.jsx";
const UserPromisedata = () =>
  fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());
const UserPromise = UserPromisedata();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "News",
        Component: News,
      },
      {
        path: "Mobiles",
        Component: Mobiles,
      },
      { path: "Laptop", Component: Laptop },
      {
        path: "User",
        // loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        // Component: User,
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <User UserPromise={UserPromise}> </User>
          </Suspense>
        ),
      },
      {
        path: "User/:UserId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.UserId}`),
        Component: UserDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </StrictMode>
);
