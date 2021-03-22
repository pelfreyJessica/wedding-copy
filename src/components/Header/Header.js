import React, { useState } from "react";

import Navigation from "./Navigation/Navigation";
import WeddingDate from "../WeddingDate/WeddingDate";
import Overlay from "../ui/Overlay/Overlay";

import "./header.scss";
import FlowerIcon from "../FlowerIcon/FlowerIcon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
    console.log(isOpen);
  };

  const wedDate = new Date(2022, 3, 23);
  const today = new Date();
  const countdown = Math.round((wedDate - today) / (1000 * 60 * 60 * 24), 0);

  return (
    <div className="header">
      <FlowerIcon position="top" />
      <h2 className="header__heading">Grant &amp; Jessica</h2>
      <div className="header__tagline">
        <WeddingDate classes={["header__tagline__date"]} />{" "}
        <p><span className="hideOnMobile">&#8231;</span> Waxhaw, NC</p>
      </div>
      <p className="header__countdown">{countdown} days remaining!</p>
      <button
        className={`header__toggle ${isOpen ? "is-open" : "is-hidden"}`}
        type="button"
        onClick={toggleMenu}
      >
        <div className="header__toggle--menu-line"></div>
        <div className="header__toggle--menu-line"></div>
        <div className="header__toggle--menu-line"></div>
      </button>
      <Navigation open={isOpen} />
      <Overlay open={isOpen}>
        <FlowerIcon position="top" />
      </Overlay>
      <div></div>
    </div>
  );
};

export default Header;
