import React from "react";
import ReactDOM from "react-dom";
const name = "Waleed";
let luckNumber = 5;

ReactDOM.render(
    <div>
        <h1>Hello {name}</h1>
        <p>Your lucky number is {luckNumber}</p>
    </div>,

    document.getElementById("root")
);
