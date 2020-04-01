import React from "react";

function Column({ colWidth, children }) {
    return (
        <div className={colWidth}>
            {children}
        </div>
    );
};

export default Column;