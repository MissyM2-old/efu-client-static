import React from 'react';



import './css/courses.css';

export default function Course(props) {

        return (
            <div>
                <form>
                    <div className="course-container-blue">
                            <div className="column">
                                <div>
                                    <label className="small-titles light-label">Course</label>
                                    <input
                                        type="text"
                                        defaultValue='Bio 101'
                                        aria-label="courseName"
                                    />
                                </div>
                            </div>
                            <div className="column">
                                <div>
                                            <label className="small-titles light-label">Details</label>
                                            <textarea
                                                placeholder="Course Description"
                                                type="text"
                                                rows="2"
                                                cols="30"
                                                wrap="soft"
                                                size="60"
                                                name="CourseDesc"
                                                defaultValue='The study of biological systems'
                                                aria-label="CourseDesc"
                                        />
                                </div>
                            </div>
                            <div className="action-btns">
                                <button 
                                    className="green-btn btn-small fivepx-margin" 
                                    type="submit" 
                                    value="Update"
                                >
                                    Update
                                </button>
                                <button 
                                    className="green-btn btn-small fivepx-margin"
                                >
                                    Delete
                                </button>
                            </div>
                    </div>
                </form>
            </div> 
            
            );
    }