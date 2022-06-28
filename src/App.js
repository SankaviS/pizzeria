import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import PizzaComponent from "./components/Products/pizzacomponent";
import Home from "./components/Home";
import Dessert from "./components/Products/Dessert";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<PizzaComponent />} />
          <Route path="/dessert" element={<Dessert />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
