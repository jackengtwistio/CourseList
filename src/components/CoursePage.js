import React from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            courses: []
        };
    }

    componentDidMount(){
        getCourses().then((courses)=>{
            this.setState({courses:courses})
        })
    }
    render(){
        return <>
        <h2>Courses</h2>
        <table class="table table-dark table-striped">
            <thead >
                <th>Slug</th>
                <th>Title</th>
                <th>Category</th>
            </thead>
            <tbody>
                {this.state.courses.map(course=>
                <tr key={course.id}>
                    <td className="table-active">
                        <Link to ={"/CoursePage/"+course.slug}>{course.slug}</Link>
                        </td>
                    <td>{course.title}</td>
                    <td>{course.category}</td>
                </tr>)}
            </tbody>
        </table>
        </>
    }

}

export default CoursesPage;

