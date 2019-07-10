import React from 'react';
import './css/deliverables.css';

import NavBar from "./navbar";
import RightSideDrawer from './right-side-drawer';
import Backdrop from './backdrop';
import BackdropWhite from './backdrop-white';

import AddDeliverableForm from './add-deliverable-form';
import DeliverableProfile from './deliverable-profile';




export default function Deliverables(props) {
                
                const thiscoursedeliverables = this.props.thiscoursedeliverables.map((deliverable, index) => {
                        return (
                                <ul key={index} id={deliverable.id} className="deliverable-width tenpx-bottom-margin ">
                                        <DeliverableProfile
                                                {...deliverable}
                                                {...this.props}
                                        />   
                                </ul>
                        );
                });

                const thistermdeliverables = this.props.thistermdeliverables.map((deliverable, index) => {
                        return (
                                <ul key={index} id={deliverable.id} className="deliverable-width tenpx-bottom-margin ">
                                        <DeliverableProfile
                                                {...deliverable}
                                                {...this.props}
                                        />   
                                </ul>
                        );
                });


                const mycoursedropdown = this.props.thistermcourses.map((course, index) => {
                        return (
                            <option 
                                key={index}
                                value={course.courseName}
                                >
                                {course.courseName}
                            </option>
                        );
                    });
                return (
                        <div className="content-container">
                                <div className="">
                                        <NavBar {...this.props} />
                                </div> 
                                <div className="content-sub-container">
                                                <header className="page-header">
                                                        <h2>My Deliverables</h2>
                                                        <h3>Term: {this.props.currentterm}</h3>
                                                        <h4>{this.props.deliverableMessage}</h4>
                                                </header>
                                                
                                                <div
                                                        type="text"
                                                        className="dropdown unit-container-green fivepx-margin course"
                                                        >
                                                                English 101
                                                </div>
                                                                SHOW DELIVERABLES FOR ENGLISH 101{thistermdeliverables}
                                                      
                                                       
                                        </div>
                        </div>
                        
                );


        }       
