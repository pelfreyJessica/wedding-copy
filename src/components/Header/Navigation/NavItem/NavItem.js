import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./navItem.scss";

const NavItem = (props) => (
  <li className="nav__li">
    <NavLink to={props.link} className="nav__item">
      {props.children}
    </NavLink>
  </li>
);

NavItem.propTypes = {
  class: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default NavItem;
