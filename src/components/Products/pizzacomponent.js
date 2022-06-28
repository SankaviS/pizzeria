import React, { useState } from "react";
import Pizza from "./pizza";
import { pizzas } from "./data";
import Footer from "./../Footer/index";
import Navbar from "../Navbar/index";
import Sidebar from "../Sidebar/index";
const PizzaComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className="container">
        <div className="row">
          {pizzas.map((pizzas) => {
            return (
              <div className="col-md-4 p-3">
                <div>
                  <Pizza pizza={pizzas} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PizzaComponent;
