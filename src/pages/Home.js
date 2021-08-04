import React from "react";
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <div className="home-background">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className="center-home-text">Hello, Employee!</h1>
    </div>
  );
};

export default Home;
