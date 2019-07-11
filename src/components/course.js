import React from 'react';



import './css/courses.css';

export default function Course(props) {

        return (
            <div>
                <form>
                    <div>
                            <div className="column">
                                <div>
                                    <label>Course</label>
                                    <input
                                        type="text"
                                        defaultValue={props.courseName}
                                        aria-label="courseName"
                                    />
                                    
                                </div>
                            </div>
                            <div className="column">
                                <div>
                                            <label>Details</label>
                                            <textarea
                                                placeholder="Course Description"
                                                type="text"
                                                rows="2"
                                                cols="30"
                                                wrap="soft"
                                                size="60"
                                                name="CourseDesc"
                                                defaultValue={props.courseDesc}
                                                aria-label="CourseDesc"
                                        />
                                </div>
                            </div>
                            <div className="center">
                                <button
                                    type="submit" 
                                    value="Update"
                                >
                                    Update
                                </button>
                                <button
                                >
                                    Delete
                                </button>
                            </div>
                    </div>
                </form>
            </div> 
            
            );
    }