import { useParams } from "react-router-dom";
import FoodItemCard from "./FoodItemCard";
import Shimmer from "./Shimmer";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

export default function RestaurantMenu() {
  const { id } = useParams();

  const menu = useRestaurantMenu(id);
  return !menu?.length ? (
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
      {menu?.map((x) => (
        <FoodItemCard key={x.card.info.id} {...x.card.info} />
      ))}
    </div>
  );
}
