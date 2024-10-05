import React from "react";
import ReactDom from "react-dom"

const paragraphEle = React.createElement("h1", null, "Hello hi world of React")

const root = document.getElementById("root");

ReactDom.render(paragraphEle, root)