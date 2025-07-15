import { Link } from "react-router-dom";
import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";

export default function Body({ restaurants }) {
  const PromotedRestaurant = withPromotedLabel(RestaurentCard);
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
          <Link to={"/restaurants/" + product.info.id} key={product.info.id}>
            {product?.info.promoted ? (
              <PromotedRestaurant {...product.info} />
            ) : (
              <RestaurentCard {...product.info} />
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
