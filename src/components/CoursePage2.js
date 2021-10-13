import React, { useState, useEffect } from "react"
import { getCourses } from "../api/courseApi";
import CourseList from "./common/CourseList";

export default function CoursePage2(){
    const[courses,setCourses] = useState([])
    const onc=document.getElementsByTagName("body").onClick
    useEffect(()=>{
        getCourses().then(_courses=>setCourses(_courses))
    }, [ onc])

    return(
        <CourseList courses={courses}/>
    )

}