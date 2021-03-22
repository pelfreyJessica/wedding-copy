import React from "react";
import PropTypes from "prop-types";

import "./flowerIcon.scss";

const FlowerIcon = (props) => (
  <div className={`flowerIcon flowerIcon__${props.position}`}></div>
);

FlowerIcon.propTypes = {
  position: PropTypes.string,
};

export default FlowerIcon;
