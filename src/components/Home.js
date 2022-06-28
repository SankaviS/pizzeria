import React from "react";
import Products from "./Products/index";
import { productData, productDataTwo } from "./Products/data";
import Feature from "./Feature/index";
import Hero from "./Hero/index";
import { GlobalStyle } from "../globalStyles";

import Footer from "./Footer/index";
const Home = () => {
  return (
    <div>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
      <Footer />
    </div>
  );
};

export default Home;
