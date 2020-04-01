import React from "react";

function column({ colWidth, children }) {
    return (
        <div className={colWidth}>
            {children}
        </div>
    );
};

export default column;