import { createElement } from "react";
import { createRoot } from "react-dom/client";

const h1 = createElement("h1", {}, "Hello world from  React");
const root = document.querySelector("#root");
createRoot(root).render(h1);
