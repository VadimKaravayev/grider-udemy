import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/books";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Provider>
    <App />
  </Provider>
);
