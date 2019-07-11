import React from 'react';
import './css/review-current-week.css';

export default function CourseGrades(props) {
    
        return (
                    <div className="border background-color-light-gray course-grades">
                            <div className="center" >Course:  {props.course}</div>
                            <div  className="center">Current Grade:  {props.gradeNum}</div>
                            <form className="center">
                                <div>
                                    <input
                                        type="number" 
                                        value="92"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        value="Update"
                                    >
                                        Commit Your Grade
                                    </button>
                                </div>
                            </form>
                    </div>
            );
        };
