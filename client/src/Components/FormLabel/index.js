import React from "react";

function FormLabel({ name }){
    return (
        <label dataName={name}>{name}</label>
    );
};

export default FormLabel;