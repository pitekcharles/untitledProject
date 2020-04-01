import React from "react";

function formWrapper({ children }){
    return (
        <form>
            {children}
        </form>
    );
};

export default formWrapper;