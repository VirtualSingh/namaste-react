import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import "./App.css";

function AppLayout() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
const root = document.querySelector("#root");
createRoot(root).render(<AppLayout />);
