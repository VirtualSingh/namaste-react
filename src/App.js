import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import "./App.css";
import { useState, useEffect } from "react";
import { API_URL } from "./utils/constants";

async function fetchRestaurants(setRestaurants) {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    setRestaurants(
      data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  } catch (err) {
    console.error(err.message);
  }
}

function AppLayout() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  function filterRestaurants() {
    const filteredRestaurants = restaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurants(filteredRestaurants);
  }

  useEffect(() => {
    fetchRestaurants(setRestaurants);
  }, []);

  return (
    <>
      <Header
        filterRestaurants={filterRestaurants}
        setSearchText={setSearchText}
        searchText={searchText}
      />
      <Body restaurants={restaurants} />
      <Footer />
    </>
  );
}
const root = document.querySelector("#root");
createRoot(root).render(<AppLayout />);
