import React from 'react';
import {connect} from 'react-redux';
import './css/deliverables.css';

import NavBar from "./navbar";
import RightSideDrawer from './right-side-drawer';
import DeliverableProfile from './deliverable-profile';




export function Deliverables(props) {
                
                const thiscoursedeliverables = props.thiscoursedeliverables.map((deliverable, index) => {
                        return (
                                <ul key={index} id={deliverable.id} className="deliverable-width tenpx-bottom-margin ">
                                        <DeliverableProfile
                                                {...deliverable}
                                                {...props}
                                        />   
                                </ul>
                        );
                });

                const thistermdeliverables = props.thistermdeliverables.map((deliverable, index) => {
                        return (
                                <ul key={index} id={deliverable.id} className="deliverable-width tenpx-bottom-margin ">
                                        <DeliverableProfile
                                                {...deliverable}
                                                {...props}
                                        />   
                                </ul>
                        );
                });


                const mycoursedropdown = props.thistermcourses.map((course, index) => {
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
                                        <NavBar {...props} />
                                </div> 
                                <div className="content-sub-container">
                                                <header className="page-header">
                                                        <h2>My Deliverables</h2>
                                                        <h3>Term: {props.currentterm}</h3>
                                                        <h4>{props.deliverableMessage}</h4>
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
        
const mapStateToProps = (state) => ({
        todaydeliverables: state.todaydeliverables,
        thisweekdeliverables: state.thisweekdeliverables
        });
        
export default connect(mapStateToProps)(Deliverables);
        
