import React, { useState } from "react";
import { productDataTwo } from "./data";
import Products from "./index";
import Navbar from "../Navbar/index";
import Sidebar from "../Sidebar/index";
import Footer from "./../Footer/index";

const Dessert = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
      <Footer />
    </div>
  );
};

export default Dessert;
