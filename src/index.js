import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./hero/navbar/components/Navbar";
import Classes from "./pages/classes/Classes";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/fitness" element={<App />}></Route>
        <Route path="/classes" element={<Classes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
