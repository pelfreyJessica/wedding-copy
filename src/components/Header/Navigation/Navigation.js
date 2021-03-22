import React from "react";
import PropTypes from "prop-types";

import NavItem from "./NavItem/NavItem";

import "./navigation.scss";

const Navigation = (props) => {
  return (
    <nav className={`nav ${props.open ? "is-open" : "is-hidden"}`}>
      <ul className="nav__list">
        <NavItem link="/my-wedding-website">Home</NavItem>
        <NavItem link="/my-wedding-website/our-story">Our Story</NavItem>
        <NavItem link="/my-wedding-website/venue">Venue</NavItem>
        <NavItem link="/my-wedding-website/travel">Travel</NavItem>
        <NavItem link="/my-wedding-website/things-to-do">Things to Do</NavItem>
        <NavItem link="/my-wedding-website/faq">FAQ</NavItem>
        <NavItem link="/my-wedding-website/rsvp">RSVP</NavItem>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Navigation;
