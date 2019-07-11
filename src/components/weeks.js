import React from 'react';
import {connect} from 'react-redux';


import './css/weeks.css';


export class Weeks extends React.Component {
        render() {
                const weeks = this.props.thistermweeks.map((week, index) => {
                        return (
                                <div>
                                        <h3>Week Number {week.weekNum}</h3>
                                        <h4>Attitudes</h4>
                                        
                                        <ul>
                                                <li className="attitude">
                                                        <div className="border background-color-light-gray">
                                                                <div>liked Least</div>
                                                                <div>{week.likedLeast}</div>
                                                        </div>
                                                        <div className="border background-color-light-gray">
                                                                <div>Liked Most</div>
                                                                <div>{week.likedMost}</div>
                                                        </div>
                                                </li>
                                                <li className="attitude">
                                                        <div className="border background-color-light-gray">
                                                                <div>Most Difficult</div>
                                                                <div>{week.mostDifficult}</div>
                                                        </div>
                                                        <div className="border background-color-light-gray">
                                                                <div>Least Difficult</div>
                                                                <div>{week.leastDifficult}</div>
                                                        </div>
                                                </li >
                                        </ul>
                                        <h4>Courses and Grades</h4>
                                        <div>

                                                {this.props.thistermgrades.map(grade => {
                                                                return (
                                                                        <ul className="border background-color-light-gray course-grades">
                                                                                <div className="center">
                                                                                        <div>{grade.course}</div>
                                                                                        <div>{grade.gradeNum}</div>
                                                                                </div>
                                                                                
                                                                        </ul>
                                                                );
                                                })
                                        }
                                        </div>
                                        
                                </div>
                        );

                });

                return (
                                <div className="content-sub-container">
                                        <header className="page-header">
                                                <h2>Your Weeks</h2>
                                                <h3>Term:  Summer (4 weeks)</h3>
                                        </header>
                                        
                                        <div className="section-container">
                                                <div className="list-vertical this-week-weeks">
                                                        {weeks}
                                                </div> 
                                        </div>
                                </div>
                                
                                        
                );
        }

                
}
const mapStateToProps = (state) => ({
        thistermweeks: state.thistermweeks,
        thistermgrades: state.thistermgrades
    });
    
    export default connect(mapStateToProps)(Weeks);