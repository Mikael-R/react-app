import React from "react";

import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="buttons">
        <button className="button is-primary">Primary</button>
        <button className="button is-link">Link</button>
      </div>

      <div className="buttons">
        <button className="button is-info">Info</button>
        <button className="button is-success">Success</button>
        <button className="button is-warning">Warning</button>
        <button className="button is-danger">Danger</button>
      </div>
    </>
  );
};

export default Home;
