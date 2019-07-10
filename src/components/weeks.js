import React from 'react';

import NavBar from "./navbar";
import RightSideDrawer from './right-side-drawer';

import './css/weeks.css';


export default function Weeks(props) {
               
        /*       
                const weeks = props.thistermweeks.map((week, index) => {
                        return (
                                <div className="unit-container-blue hundredpercent-width tenpx-bottom-margin" key={index + 100}>
                                        <h3>Week Number {week.weekNum}</h3>
                                        <h4>Attitudes</h4>
                                        
                                        <ul key={index} className="weeks-row">
                                                <li className="week-row">
                                                        <div className="week-item">
                                                                <div className="small-titles dark-label week-label likedLeast">liked Least</div>
                                                                <div className="small-titles light-label item-body">{week.likedLeast}</div>
                                                        </div>
                                                        <div className="week-item">
                                                                <div className="small-titles dark-label week-label likedMost">Liked Most</div>
                                                                <div className="small-titles light-label item-body">{week.likedMost}</div>
                                                        </div>
                                                </li>
                                                <li className="week-row">
                                                        <div className="week-item">
                                                                <div className="small-titles dark-label week-label mostDifficult">Most Difficult</div>
                                                                <div className="small-titles light-label item-body">{week.mostDifficult}</div>
                                                        </div>
                                                        <div className="week-item">
                                                                <div className="small-titles dark-label week-label leastDifficult">Least Difficult</div>
                                                                <div className="small-titles light-label item-body">{week.leastDifficult}</div>
                                                        </div>
                                                </li>
                                        </ul>
                                        <h4>Courses and Grades</h4>
                                        <div className="weeks-row">

                                                {props.thistermgrades.filter(grade => grade.week === week.weekNum )
                                                .map((grade, index) => {
                                                                return (
                                                                        <div key={index + 1} className="grade-container-green fivepx-margin">
                                                                                <div className="small-titles dark-label week-label course-title">{grade.course}</div>
                                                                                <div className="small-titles light-label item-body course-grade">{grade.gradeNum}</div>
                                                                        </div>
                                                                );
                                                })
                                        }
                                        </div>
                                        
                                </div>
                        );

                });
                */
                return (
                          <div className="content-container">
                                <NavBar />
                                <div className="content-sub-container">
                                        <header className="page-header">
                                                <h2>Your Weeks</h2>
                                                <h3>Term:  CURRENT TERM WILL GO HERE</h3>
                                        </header>
                                        
                                        <div className="section-container">
                                                <div className="list-vertical this-week-weeks">
                                                        WEEKS WILL GO HERE{/*{weeks}*/}
                                                </div> 
                                        </div>
                                </div>
                                
                        </div>
                                
                                        
                );
        }
