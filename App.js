import React from "react";
import ReactDOM from "react-dom/client";


// React.createElement => Object => HTML element render
const heading = React.createElement("h1", {id:'heading'}, "Hello React World!🚀");
const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX - HTML/XML like syntax (Transpiled before it reaches the JS engine - Parcel - Babel)

const jsxHeading = <h1 id="heading">Basic React From JSX 🚀</h1>

root.render(jsxHeading);
