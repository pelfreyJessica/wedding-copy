import React from "react";

import Hero from "../../images/crowders-mtn.jpg";
import WeddingDate from "../../components/WeddingDate/WeddingDate";
import Schedule from "../../components/Schedule/Schedule";

import "./home.scss";
import FlowerIcon from "../../components/FlowerIcon/FlowerIcon";

const Home = () => (
  <div className="home">
    <img
      src={Hero}
      alt="Grant and I on top of Crowders Mountain"
      className="home__hero"
    />
    <div className="home__date-container">
      <WeddingDate classes={["home__date-container__date"]} />
      <p className="home__date-container__location">Waxhaw NC</p>
    </div>
    <FlowerIcon position="inline" />
    <div className="home__details">
      <h1 className="home__details__event subheading">Wedding Day</h1>
      <WeddingDate classes={["home__details__date"]} />
      <p className="home__details__detail">Red Barn Events</p>
      <p className="home__details__detail">
        6012 Jeanne Dr., Waxhaw, NC, 28173, USA
      </p>
      <p className="home__details__detail">
        Outdoor ceremony followed by reception in covered, open-air barn.
      </p>
      <p className="home__details__detail">
        <strong>Attire:</strong> Casual Dressy
      </p>
    </div>
    <div className="home__schedule">
      <Schedule time="4:30pm - 5:00pm" event="guest arrival" />
      <Schedule time="5:00pm - 5:30pm" event="ceremony" />
      <Schedule time="5:30pm - 6:30pm" event="cocktail hour" />
      <Schedule time="6:30pm - 10:00pm" event="reception" />
      <Schedule time="10:00pm - 10:15pm" event="sparkler sendoff" />
    </div>
  </div>
);

export default Home;
