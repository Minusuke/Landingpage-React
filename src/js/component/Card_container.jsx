import React from "react"

const CardContainer = ({ children }) => {
    return (
        <div className="fluid-container d-flex text-dark p-5">
            {children}
        </div>
    )
};
export default CardContainer;