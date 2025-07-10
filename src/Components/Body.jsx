import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";

async function fetchProducts(setProducts) {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data?.products);
  } catch (err) {
    console.error(err.message);
  }
}

export default function Body() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
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
          <RestaurentCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
