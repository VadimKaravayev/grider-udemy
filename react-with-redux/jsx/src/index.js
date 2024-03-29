//1. Import React and ReactDom
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//2. Get a ref to the div with id root
const el = document.getElementById("root");

//3. Tell React to take control of that element
const root = ReactDOM.createRoot(el);

//4. Create a component

//5. Show the component on the screen
root.render(<App />);
