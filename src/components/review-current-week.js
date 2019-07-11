import React from 'react';
import {connect} from 'react-redux';


import CourseGrades from './course-grades';

export class ReviewCurrentWeek extends React.Component {
    render() {
        const allweeks = this.props.thistermweeks.map(week => {
            return (
                <option>Week {week.weekNum}</option>                    
            );
        });

        const mycoursedropdown = this.props.thistermcourses.map(course => {
            return (
                <option >{course.courseName}</option>
            );
        });

        let mygrades = this.props.thisweekgrades;
        mygrades = mygrades.map((grade, index) => {
           return ( 
                <li id={grade.id}>
                        <CourseGrades {...grade}  /> 
                </li> 
           );
        });

        
        return (
            <div>
                
                    <div className="content-sub-container">
                            <header className="page-header">
                                <h2>Review Last Week</h2>
                                <h3>Term:  Summer (4 Weeks)</h3>
                                <h3>Week 1</h3>
                            </header>
                            <label>Select a week</label>
                            <select type="text">
                                    {allweeks}
                            </select>

                            <div className="section-container">

                                <div>
                                        <h3>How did you feel about your week?</h3>
                                        <h4>Update week 1 now.</h4>
                                        <div>
                                                    <ul className="medium-width left-padding">
                                                           <li>
                                                                        <div className="border background-color-light-gray center">
                                                                            <form action="/" >
                                                                                <div>Liked Least</div>
                                                                                <div>
                                                                                    <div
                                                                                        type="text"
                                                                                        >English 101
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                        <select type="text">
                                                                                                    {mycoursedropdown}
                                                                                        </select>
                                                                                    </div>
                                                                                <div className="item">
                                                                                    <button
                                                                                        type="submit"
                                                                                    >
                                                                                        Save
                                                                                    </button>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                        <div className="border background-color-light-gray center">
                                                                            <form action="/" >
                                                                            <div>Liked Most</div>
                                                                                <div>
                                                                                    <div>Bio 101
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                        <select type="text">
                                                                                                    {mycoursedropdown}
                                                                                        </select>
                                                                                </div>
                                                                                <div className="item">
                                                                                    <button
                                                                                        type="submit"
                                                                                        value="Update"
                                                                                    >
                                                                                        Save
                                                                                    </button>
                                                                                </div>
                                                                            </form>
                                                                        </div> 
                                                                </li>
                                                                <li>
                                                                        <div className="border background-color-light-gray center">
                                                                            <form action="/" >
                                                                            <div>Most Difficult</div>
                                                                                    <div>
                                                                                        <div>
                                                                                                    Physics 101
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <select type="text">
                                                                                                    {mycoursedropdown}
                                                                                        </select>
                                                                                    </div>
                                                                                    
                                                                                    <div className="item">
                                                                                    <button
                                                                                        type="submit"
                                                                                        value="Update"
                                                                                    >
                                                                                        Save
                                                                                    </button>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                        <div className="border background-color-light-gray center">
                                                                                <form action="/" >
                                                                                <div>Least Difficult</div>
                                                                                        <div>
                                                                                            <div>
                                                                                                    English 101
                                                                                            </div>
                                                                                        </div>
                                                                                        <div>
                                                                                            <select type="text">
                                                                                                        {mycoursedropdown}
                                                                                            </select>
                                                                                        </div>
                                                                                        <div className="item">
                                                                                            <button
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

                                <div className="border">
                                        <h3 >How were your grades this week?</h3>
                                        <h4>Add grades for week 1 now.</h4>
                                        <div>
                                            <ul className="column">
                                                {mygrades}
                                            </ul>
                                        </div>
                                </div>

                            </div>
                    </div>
            </div>

            
            );
    }
}

    const mapStateToProps = (state) => ({
        thisweekgrades: state.thisweekgrades,
        thistermweeks: state.thistermweeks,
        thistermcourses: state.thistermcourses
    });
    
    export default connect(mapStateToProps)(ReviewCurrentWeek);