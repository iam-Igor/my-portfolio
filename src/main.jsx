import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ParallaxProvider>
    <App />
    <Analytics />
  </ParallaxProvider>
);
