import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <p style={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" style={styles.link}>
        Go back home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "100px 20px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  code: {
    fontSize: "96px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  message: {
    fontSize: "20px",
    marginBottom: "30px",
  },
  link: {
    fontSize: "18px",
    color: "#007bff",
    textDecoration: "none",
  },
};

export default NotFound;
