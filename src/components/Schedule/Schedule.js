import React from "react";
import PropTypes from "prop-types";

import "./schedule.scss";

const Schedule = (props) => (
  <>
    <p className="schedule__time">{props.time}</p>
    <p className="schedule__event">{props.event}</p>
  </>
);

Schedule.propTypes = {
  time: PropTypes.string,
  event: PropTypes.string
};

export default Schedule;
