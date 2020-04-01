import React from "react";

function FormInput({ type, id, placeholder }){
    return (
        <input type={type} className="form-control" id={id} placeholder={placeholder} />
    );
};

export default FormInput;