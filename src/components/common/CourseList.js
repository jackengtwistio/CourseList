import React  from "react";



export default function CourseList(prop){

    return(
        <>
            <h2>Courses</h2>
            <table class="table table-dark table-striped">
                <thead >
                    <th>Title</th>
                    <th>Slug</th>
                    <th>Category</th>
                </thead>
                <tbody>
                    {prop.courses.map(course=>
                    <tr key={course.id}>
                        <td className="table-active">{course.category}</td>
                        <td>{course.title}</td>
                        <td>{course.slug}</td>
                    </tr>)}
                </tbody>
            </table>
        </> 
    )
}