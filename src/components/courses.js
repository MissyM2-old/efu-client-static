import React from 'react';
import './css/courses.css';

import NavBar from "./navbar";
import RightSideDrawer from './right-side-drawer';
import Backdrop from './backdrop';
import BackdropBlack from './backdrop-black';
import BackdropWhite from './backdrop-white';
import ModalDeleteCourse from './modal-delete-course';

import AddCourseForm from './add-course-form';
import Course from './course';



export default function Courses(props) {
    


        const mycourses = this.props.thistermcourses.map((course, index) => {
            return (
                <li className="" key={index} id={course.id}>
                    <Course 
                        {...course} 
                        {...this.props} 
                        courseName={course.courseName} 
                        />
                </li>
            );
        });
        return (
            <div className="content-container">
            <div className="">
                <NavBar {...this.props}/>
            </div>
                <div className="content-sub-container">
                    <header className="page-header">
                        <h2>My courses</h2>
                        <h3>Term:  {this.props.currentterm}</h3>
                    </header>
                    <div>
                        <AddCourseForm 
                            type="course" 
                            {...this.props}
                        />
                        <ul className="course-row">
                                {mycourses} 
                        </ul>
                    </div>
                </div>
            </div>
        );

    }

    