import React from "react";

const Jumbotron = () => {
  return (
    <div className="container bg-light text-dark p-5" id="jumbotron">
      <h1 className="card-title">A Warm Welcome!</h1>
      <p lassName="card-text">
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <div className="d-flex justify-content-center">
        <a className="btn btn-primary btn-lg" href="#">
          Call to action!
        </a>
      </div>
    </div>
  );
};
export default Jumbotron;
