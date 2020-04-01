import React from "react";

function label({ name }){
    return (
        <label dataName={name}>{name}</label>
    );
};

export default label;