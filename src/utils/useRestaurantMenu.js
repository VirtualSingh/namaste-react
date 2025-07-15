import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

export function useRestaurantMenu(restaurantId) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(`${MENU_URL}${restaurantId}`);
    const json = await data.json();
    setMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
        .card.itemCards
    );
  }

  return menu;
}
