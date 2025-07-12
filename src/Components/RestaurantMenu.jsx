import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import FoodItemCard from "./FoodItemCard";
import Shimmer from "./Shimmer";

export default function RestaurantMenu() {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(`${MENU_URL}${id}`);
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
    //     .card.itemCards
    // );
    setMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
        .card.itemCards
    );
  }
  return !menu.length ? (
    <Shimmer />
  ) : (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "24px",
        gap: "24px",
        justifyContent: "center",
      }}
    >
      {menu.map((x) => (
        <FoodItemCard key={x.card.info.id} {...x.card.info} />
      ))}
    </div>
  );
}
