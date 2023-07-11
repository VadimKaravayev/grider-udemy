import Root from "./Root";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";

const root = createRoot(document.querySelector("#root"));

root.render(
  <Root>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Root>
);
