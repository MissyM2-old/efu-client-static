import React from 'react';
import {connect} from 'react-redux';

import NavBar from "./navbar";
import RightSideDrawer from './right-side-drawer';
import './css/review-current-week.css';

import CourseGrades from './course-grades';

export function ReviewCurrentWeek(props) {
/*
        let weekClasses = 'dropdown unit-container-green';
        const allweeks = props.thistermweeks.map((week, index) => {
            return (
                <option
                    key={index}
                    value={week.weekNum}
                    className={weekClasses}
                    data-identifier={week.weekNum}
                    onChange={setdivedWeek}
                >
                    Week {week.weekNum}
                </option>                    
            );
        });

        const mycoursedropdown = props.thistermcourses.map((course, index) => {
            return (
                <option key={index} >
                    {course.courseName}
                </option>
            );
        });

        let mygrades = props.thisweekgrades;
        mygrades = mygrades.map((grade, index) => {
           return ( 

                <li className="rcw-week-row grade-container-green" id={grade.id} index={index + 5}>
                        <CourseGrades {...grade}  /> 
                </li> 
           );
        });
*/
        
        return (
            <div className="content-container">
                <NavBar />
                    <div className="content-sub-container">
                            <header className="page-header">
                                <h2>Review Last Week</h2>
                                <h3>Term:  Summer (4 Weeks)</h3>
                                <h3>Week 1</h3>
                            </header>
                            <div className="hundredpercent-width">
                                <div 
                                    className="div-week-dd"
                                    defaultValue="1">
                                       all weeks will go here {/* {allweeks}*/}
                                </div>
                            </div>

                            <div className="section-container">

                                <div className="unit-container-blue hundredpercent-width tenpx-bottom-margin">
                                        <h3>How did you feel about your week?</h3>
                                        <h4>Update week 1 now.</h4>
                                        <div className="list-vertical">
                                                    <ul className="weeks-row">
                                                                <li className="week-row">
                                                                        <div className="weekdetail-container-green">

                                                                            <form action="/" >
                                                                                <div className="small-titles dark-label week-label likedLeast">Liked Least</div>
                                                                                
                                                                                <div>
                                                                                    <div
                                                                                        className="hundredpercent-width"
                                                                                        type="text"
                                                                                        >English 101
                                                                                    </div>
                                                                                </div>
                                                                                <div className="item">
                                                                                    <button
                                                                                        className="blue-btn center-btn fivepx-margin"
                                                                                        type="submit"
                                                                                    >
                                                                                        Save
                                                                                    </button>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                        <div className="weekdetail-container-green">
                                                                            <form action="/" >
                                                                            <div className="small-titles dark-label week-label likedMost">Liked Most</div>
                                                                                <div className="hundredpercent-width">
                                                                                    <div>Bio 101
                                                                                    </div>
                                                                                </div>
                                                                                <div className="item">
                                                                                    <button
                                                                                        className="blue-btn center-btn fivepx-margin"
                                                                                        type="submit"
                                                                                        value="Update"
                                                                                    >
                                                                                        Save
                                                                                    </button>
                                                                                </div>
                                                                            </form>
                                                                        </div> 
                                                                </li>
                                                                <li className="week-row">
                                                                        <div className="weekdetail-container-green">
                                                                            <form action="/" >
                                                                            <div className="small-titles dark-label week-label likedLeast">Most Difficult</div>
                                                                                    <div>
                                                                                        <div className="hundredpercent-width">
                                                                                                    Physics 101
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="item">
                                                                                    <button
                                                                                        className="blue-btn center-btn fivepx-margin"
                                                                                        type="submit"
                                                                                        value="Update"
                                                                                    >
                                                                                        Save
                                                                                    </button>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                        <div className="weekdetail-container-green">
                                                                                <form action="/" >
                                                                                <div className="small-titles dark-label week-label likedLeast">Least Difficult</div>
                                                                                        <div>
                                                                                            <div className="hundredpercent-width">
                                                                                                    English 101
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="item">
                                                                                            <button
                                                                                                className="blue-btn center-btn fivepx-margin"
                                                                                                type="submit"
                                                                                                value="Update"
                                                                                            >
                                                                                                Save
                                                                                            </button>
                                                                                        </div>
                                                                                </form>
                                                                        </div>
                                                                    </li>
                                                    </ul>
                                                      
                                        </div>
                                </div>

                                <div className="unit-container-blue hundredpercent-width tenpx-bottom-margin">
                                        <h3 >How were your grades this week?</h3>
                                        <h4>Add grades for week 1 now.</h4>
                                        <div className="grade-container">
                                            <ul className="rcw-grades-list">
                                                GRADES WILL GO HERE {/*{mygrades}*/}
                                            </ul>
                                        </div>
                                </div>

                            </div>
                    </div>
            </div>

            
            );
    }

    const mapStateToProps = (state) => ({
        todaydeliverables: state.todaydeliverables,
        thisweekdeliverables: state.thisweekdeliverables
    });
    
    export default connect(mapStateToProps)(ReviewCurrentWeek);