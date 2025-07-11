export default function Shimmer() {
  const cards = Array.from({ length: 8 }, (_, i) => i);
  return (
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
      {cards.map((x) => (
        <div
          key={x}
          className="restaurant-card"
          style={{ height: "264px", background: "#1b1f230d" }}
        ></div>
      ))}
    </div>
  );
}
