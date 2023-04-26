import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/Navigation";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
