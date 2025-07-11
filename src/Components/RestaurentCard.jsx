import { IMG_URL } from "../utils/constants";
export default function RestaurentCard({
  name,
  cloudinaryImageId,
  avgRatingString,
  cuisines,
  sla: { slaString },
}) {
  return (
    <div className="restaurant-card">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt="Restaurant"
        className="card-image"
      />
      <div className="card-info">
        <h3 className="card-title">{name}</h3>
        <p className="card-meta">{cuisines.join(" · ")}</p>
        <p className="card-delivery">
          ⭐ {avgRatingString} · {slaString}
        </p>
      </div>
    </div>
  );
}
