import { FOOD_ITEM_IMG_URL } from "../utils/constants";
const FoodItemCard = ({
  description,
  inStock,
  category,
  name,
  ratings,
  price,
  imageId,
}) => {
  const formatPrice = (price) => {
    return `₹${(price / 100).toFixed(2)}`;
  };

  const extractNutritionalInfo = (description) => {
    const match = description.match(/\[([^\]]+)\]/);
    if (match) {
      return match[1].split(", ").map((item) => item.trim());
    }
    return [];
  };

  const getCleanDescription = (description) => {
    return description.replace(/\s*\[([^\]]+)\]/, "");
  };

  const nutritionalInfo = extractNutritionalInfo(description);
  const cleanDescription = getCleanDescription(description);

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <div style={styles.imagePlaceholder}>
          <img
            src={FOOD_ITEM_IMG_URL + imageId}
            alt={name}
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div>
        <div style={styles.vegBadge}>
          <div style={styles.vegIcon}>●</div>
        </div>
        <div style={styles.stockStatus}>
          {inStock ? "In Stock" : "Out of Stock"}
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.header}>
          <div style={styles.categoryTag}>{category}</div>
          <div style={styles.rating}>
            <span style={styles.ratingIcon}>⭐</span>
            <span style={styles.ratingText}>
              {ratings.aggregatedRating.rating}
            </span>
            <span style={styles.ratingCount}>
              ({ratings.aggregatedRating.ratingCountV2})
            </span>
          </div>
        </div>

        <h2 style={styles.title}>{name}</h2>

        <p style={styles.description}>{cleanDescription}</p>

        <div style={styles.nutritionalInfo}>
          <h4 style={styles.nutritionalTitle}>Nutritional Information</h4>
          <div style={styles.nutritionalGrid}>
            {nutritionalInfo.map((info, index) => (
              <div key={index} style={styles.nutritionalItem}>
                <span style={styles.nutritionalLabel}>
                  {info.split(":")[0]}:
                </span>
                <span style={styles.nutritionalValue}>
                  {info.split(":")[1]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.footer}>
          <div style={styles.priceContainer}>
            <span style={styles.price}>{formatPrice(price)}</span>
          </div>
          <button style={styles.addButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    maxWidth: "400px",
    margin: "20px auto",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    border: "1px solid #f0f0f0",
  },

  imageContainer: {
    position: "relative",
    height: "200px",
    background: "linear-gradient(135deg, #ff9a56 0%, #ffad56 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  imagePlaceholder: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    background: "linear-gradient(135deg, #ffd89b 0%, #19547b 100%)",
  },

  imageIcon: {
    fontSize: "48px",
    opacity: 0.8,
  },

  vegBadge: {
    position: "absolute",
    top: "12px",
    left: "12px",
    backgroundColor: "#ffffff",
    borderRadius: "4px",
    padding: "4px 8px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },

  vegIcon: {
    color: "#00b050",
    fontSize: "12px",
    fontWeight: "bold",
  },

  stockStatus: {
    position: "absolute",
    top: "12px",
    right: "12px",
    backgroundColor: "#00b050",
    color: "white",
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "600",
  },

  content: {
    padding: "20px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },

  categoryTag: {
    backgroundColor: "#f0f9ff",
    color: "#0369a1",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
  },

  rating: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    backgroundColor: "#f0fdf4",
    padding: "4px 8px",
    borderRadius: "16px",
  },

  ratingIcon: {
    fontSize: "14px",
  },

  ratingText: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#16a34a",
  },

  ratingCount: {
    fontSize: "12px",
    color: "#16a34a",
  },

  title: {
    fontSize: "24px",
    fontWeight: "700",
    margin: "0 0 12px 0",
    color: "#1f2937",
    lineHeight: "1.2",
  },

  description: {
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: "1.5",
    margin: "0 0 16px 0",
  },

  nutritionalInfo: {
    backgroundColor: "#f9fafb",
    padding: "16px",
    borderRadius: "12px",
    marginBottom: "20px",
  },

  nutritionalTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#374151",
    margin: "0 0 12px 0",
  },

  nutritionalGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px",
  },

  nutritionalItem: {
    display: "flex",
    flexDirection: "column",
    fontSize: "12px",
  },

  nutritionalLabel: {
    color: "#6b7280",
    fontWeight: "500",
  },

  nutritionalValue: {
    color: "#374151",
    fontWeight: "600",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  priceContainer: {
    display: "flex",
    alignItems: "center",
  },

  price: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#dc2626",
  },

  addButton: {
    backgroundColor: "#ea580c",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

// Add hover effect
styles.card[":hover"] = {
  transform: "translateY(-4px)",
  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
};

export default FoodItemCard;
