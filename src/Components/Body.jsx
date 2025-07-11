import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

async function fetchProducts(setProducts) {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    console.log(
      data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setProducts(
      data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  } catch (err) {
    console.error(err.message);
  }
}

export default function Body() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return !products.length ? (
    <Shimmer />
  ) : (
    <main>
      <h1>Restaurents</h1>
      <div
        className="res-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "24px",
          gap: "24px",
          justifyContent: "center",
        }}
      >
        {products?.map((product) => (
          <RestaurentCard key={product.info.id} {...product.info} />
        ))}
      </div>
    </main>
  );
}
