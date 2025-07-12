import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import "./App.css";
import { useState, useEffect } from "react";
import { API_URL } from "./utils/constants";
import { RouterProvider, Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import NotFound from "./Components/NotFound";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    errorElement: <NotFound />,
    children: [
      { path: "/", Component: Body },
      { path: "/about", Component: About },
      { path: "/contact", Component: Contact },
      { path: "/blog", Component: Blog },
    ],
  },
]);

async function fetchRestaurants(setRestaurants, setFilteredRestaurants) {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    setRestaurants(
      data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  } catch (err) {
    console.error(err.message);
  }
}

function AppLayout() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  function filterRestaurants() {
    const filteredRestaurants = restaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  }

  useEffect(() => {
    fetchRestaurants(setRestaurants, setFilteredRestaurants);
  }, []);

  return (
    <>
      <Header
        filterRestaurants={filterRestaurants}
        setSearchText={setSearchText}
        searchText={searchText}
      />
      <Body restaurants={filteredRestaurants} />
      <Footer />
    </>
  );
}
const root = createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={routerConfig} />);
