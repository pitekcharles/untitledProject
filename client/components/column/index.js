import React from "react";

function column({ width, children }) {
    return (
        <div className="col-md-"{width}>
            {children}
        </div>
    );
};

export default column;