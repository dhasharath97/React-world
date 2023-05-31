import React from "react";
import ReactDOM from "react-dom";


const AppLayout = () => {
    return (
        <div className="container">
            <h1>This is React World</h1>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);