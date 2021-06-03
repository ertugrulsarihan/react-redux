import React from "react";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <div className="jumbotron">
      <h1>Hello World</h1>
      <p>React Redux Web App</p>
      <Link to="/about" className="btn  btn-primary btn-lg">
        Learn More
      </Link>
    </div>
  );
};

export default AboutPage;
