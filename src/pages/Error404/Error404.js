import React from "react";
import { Link } from "react-router-dom";

import "./error404.scss";

const Error404 = (props) => (
  <div className="error-404">
    <h1 className="error-message">Oops, Something went wrong</h1>
    <Link to="/" className="error-redirect-link">Go Back to the Home Page</Link>
  </div>
);

export default Error404;
