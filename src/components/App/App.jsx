import React from "react";
import "./style-colors.css";
import "./style.css";

import Header from "../Layout/Header/Header";
import Hero from "../Blocks/Hero/Hero";
import Collections from "../Blocks/Collections/Collections";
import About from "../Blocks/About/About";
import Catalog from "../Blocks/Catalog/Catalog";
import Reviews from "../Blocks/Reviews/Reviews";
import Aside from "../Blocks/Aside/Aside";
import Footer from "../Layout/Footer/Footer";
import SmallSection from "../misc/SmallSection/SmallSection";
import Subscribe from "../Blocks/Subscribe/Subscribe";
import ToTop from "../misc/ToTop/ToTop";
import Popup from "../misc/Popup/Popup";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Hero />
          <Collections />
          <About />
          <Catalog />
          <Reviews />
          <SmallSection>
            <Subscribe />
          </SmallSection>
          <Aside />
        </div>
      </main>
      <Footer />
      <ToTop />
      <Popup />
    </>
  );
};

export default App;
