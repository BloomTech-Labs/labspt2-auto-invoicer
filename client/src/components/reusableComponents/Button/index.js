import React from "react";

const Button = props => {
    return (
        <button onClick={props.click} className="button" type="submit">
            {props.children}
        </button>
    );
};

export default Button;
