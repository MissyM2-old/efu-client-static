import React from 'react';
import './css/review-current-week.css';

export default function CourseGrades(props) {
    
        return (
                    <div>
                            <div className="small-titles dark-label grade-label course-title" >Course:  {this.props.course}</div>
                            <div className="small-titles light-label item-body course-grade">Current Grade:  {this.props.gradeNum}</div>
                            <form>
                            
                                <div>
                                    <input
                                        className="grade-input"
                                        type="number" 
                                        value="92"
                                    />
                                </div>
                                <div className="item">
                                    <button
                                        className="blue-btn center-btn fivepx-margin"
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
