import React from "react";
import { Link } from "react-router-dom";

export default function SingleCourse(props){
    return(
        <>
        <h2>Detail</h2>
        {props.match.params.slug}
        <br/>
        <Link to="/CoursePage">more courses</Link>
        </>
    )
}