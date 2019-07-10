import React from 'react';

import './css/deliverable.css';

export default function Deliverable(props) {
    return (
                <div>
                        <div className="center">
                                <div className="deliverable-sub-section sec-one">
                                        <div className="column">
                                            <label className="small-titles light-label"> Course Name</label>
                                            <div className="deliverable-field course-name">{props.courseName}</div>
                                        </div>
                                        <div className="column">
                                                <label className="small-titles light-label">Due Date</label>
                                                <div className="deliverable-field dueDateFormatted">{props.dueDateFormatted}</div>
                                        </div>
                                </div>
                                <div className="deliverable-sub-section sec-three">
                                            <div className="column">
                                                    <label className="small-titles light-label">Prep Hours</label>
                                                    <div className="deliverable-field prephrs">{props.prephrs}</div>
                                            </div>
                                            <div className="column">
                                                <label className="small-titles light-label"> Deliverable Name</label>
                                                <div className="deliverable-field deliverableName">{props.deliverableName}</div>
                                            </div> 
                                </div>
                                <div className="deliverable-sub-section sec-two">
                                            <div className="column">
                                                    <label className="small-titles light-label"> Description</label>
                                                    <div className="deliverable-field desc">{props.desc}</div>
                                            </div>
                                            <div className="column">
                                                    <label className="small-titles light-label"> Impact</label>
                                                    <div className="deliverable-field inpact">{props.inpact}</div>
                                            </div>    
                                </div>
                                
                        </div>
                                 
                </div>
            );
        }