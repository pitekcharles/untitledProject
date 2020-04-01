import React from "react";

function input({ type, id }){
    return (
        <input type={type} className="form-control" id={id} />
    );
};

export default input;