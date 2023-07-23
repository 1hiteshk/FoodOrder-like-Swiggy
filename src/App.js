import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import RestrauntCard from "./components/RestaurantCard";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import { useContext } from "react";
import userContext from "./utils/userContext";
import store from "./utils/store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Login from "./components/Login";

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "namaste react",
    email: "1hiteshk@gmail.com",
  });

  return (
    <>
      <Provider store={store}>
        <userContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </userContext.Provider>
      </Provider>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about", // parentPath/{path} => localhost:1244/about
        element: (
          <Suspense
            fallback={<h1 className="p-4 items-center">Loading....</h1>}
          >
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile", // parentPath/{path} => localhost:1244/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "namaste react",
              email: "1hiteshk@gmail.com",
            }}
          />
        ),
      },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
