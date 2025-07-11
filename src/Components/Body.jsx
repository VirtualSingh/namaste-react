import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";

export default function Body({ restaurants }) {
  return !restaurants.length ? (
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
        {restaurants?.map((product) => (
          <RestaurentCard key={product.info.id} {...product.info} />
        ))}
      </div>
    </main>
  );
}
