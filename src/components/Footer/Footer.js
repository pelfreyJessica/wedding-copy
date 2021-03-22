import React from "react";

import WeddingDate from '../WeddingDate/WeddingDate';
import FlowerIcon from '../FlowerIcon/FlowerIcon';

import "./footer.scss";

const Footer = () => (
  <div className="footer">
    <h2 className="footer__heading subheading">G &amp; J</h2>
    <WeddingDate classes={["footer__date"]}/>
    <FlowerIcon position="bottom" />
  </div>
);

export default Footer;
