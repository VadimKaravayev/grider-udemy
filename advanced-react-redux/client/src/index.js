import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import Welcome from "./components/Welcome";
import Signup from "./components/Signup";
import Feature from "./components/Feature";
import Signout from "./components/Signout";
import Signin from "./components/Signin";

const root = createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" Component={Welcome} />
          <Route path="/signup" Component={Signup} />
          <Route path="/signin" Component={Signin} />
          <Route path="/feature" Component={Feature} />
          <Route path="/signout" Component={Signout} />
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>
);
