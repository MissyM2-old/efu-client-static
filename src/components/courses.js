import React from 'react';
import {connect} from 'react-redux';
import './css/courses.css';

import NavBar from "./navbar";
import RightSideDrawer from './right-side-drawer';

import Course from './course';



export function Courses(props) {
    

/*
        const mycourses = props.thistermcourses.map((course, index) => {
            return (
                <li className="" key={index} id={course.id}>
                    <Course 
                        {...course} 
                        {...props} 
                        courseName={course.courseName} 
                        />
                </li>
            );
        });
        */
        return (
            <div className="content-container">
            <div className="">
                <NavBar {...props}/>
            </div>
                <div className="content-sub-container">
                    <header className="page-header">
                        <h2>My courses</h2>
                        <h3>Term:  {props.currentterm}</h3>
                    </header>
                    
                </div>
            </div>
        );

    }

    const mapStateToProps = (state) => ({
        todaydeliverables: state.todaydeliverables,
        thisweekdeliverables: state.thisweekdeliverables
    });
    
    export default connect(mapStateToProps)(Courses);

    