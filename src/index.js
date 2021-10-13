import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import HomePage from "./components/homePage";
import { render } from "react-dom";
// import AboutPage from "./components/about"; 
import App from "./components/App"
import {BrowserRouter} from "react-router-dom"

render(<BrowserRouter> <App/> </BrowserRouter>, document.getElementById("root"))

