import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./homePage";
import Header from "./common/Header"
import CoursePage from "./CoursePage";
import CoursePage2 from "./CoursePage2";
import NotFoundPage from "./NotFoundPage";
import { Route,Switch } from "react-router-dom";
import SingleCoursePage from "./SingleCoursePage";



export default function App(){
    return (
        <div>
            <Header />
            <Switch>
            <Route path="/" exact  component={HomePage} />
            <Route path="/AboutPage" component={AboutPage} />
            <Route path="/CoursePage" exact component={CoursePage} />
            <Route path="/CoursePage2" component={CoursePage2} />
            <Route path="/CoursePage/:slug" component={SingleCoursePage} />
            <Route component={NotFoundPage}/>
            </Switch>
        </div>
    )
}












// export default function App(){
//     function pageJumper(){
//         const route = window.location.pathname;
//         if(route==="/AboutPage") return<AboutPage/>;
//         if(route==="/CoursePage") return<CoursePage/>;
//         if(route==="/CoursePage2") return<CoursePage2/>;
//         return<HomePage/>;
//     }
//     return(
//         <div className="container-fluid">
//             <Header />
//             {pageJumper()}
//         </div>
//     )
// }


