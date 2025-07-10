export default function RestaurentCard({ brand, title, images, rating, tags }) {
  return (
    <div className="restaurant-card">
      <img src={images[0]} alt="Restaurant" className="card-image" />
      <div className="card-info">
        <h3 className="card-title">{brand ? brand : title}</h3>
        <p className="card-meta">{tags.join(" · ")}</p>
        <p className="card-delivery">⭐ {rating} · 30 mins</p>
      </div>
    </div>
  );
}
