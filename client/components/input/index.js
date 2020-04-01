import React from "react";

function input({ type, id, placeholder }){
    return (
        <input type={type} className="form-control" id={id} placeholder={placeholder} />
    );
};

export default input;