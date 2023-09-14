import React from "react";

const Cards = ({ image, title, children }) => {
    return (
        <div className="container d-flex ">
            <div className="card justify-content-center" style={{ width: "19rem" }}>
                <img src={image} className="card-img-top"></img>
                <div class="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{children}</p>
                    <hr class="my-4"></hr>
                    <a href="#" class="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    )
};
export default Cards;