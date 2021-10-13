import React from "react";
import { NavLink } from "react-router-dom";


export default function NavHead(){
    const activeStyle = { color: "orange" };
    return(
        <nav>

            <NavLink exact activeStyle={activeStyle} to="/">Home</NavLink> 
            | <NavLink activeStyle={activeStyle} to="/AboutPage">About</NavLink> 
            | <NavLink activeStyle={activeStyle} to="/CoursePage">Courses</NavLink>
            |<NavLink activeStyle={activeStyle} to="/CoursePage2">toggle courses</NavLink>
        </nav>
    )
}