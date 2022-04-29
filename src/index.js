// This is the main js file that webpack is set up to look for to bundle our code.
// all of our project files should be either imported to this file or to a file gets imported to this file.
import "./style.css" 
import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
// If an image is needed to be imported to file. We can import it as the following :
// const imgURL from "./my-image-file/my-image.jpeg"
// And we can use it inside of our React components as the following
//  <img src={imgURL} />


// 

ReactDOM.render(<App />, document.querySelector(".root"))