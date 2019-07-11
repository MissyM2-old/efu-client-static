import React from 'react';

import './css/deliverable.css';

export default function Deliverable(props) {
    return (
                <div className="border background-color-light-gray center full-width">
                        <div className="center row">
                                <div>
                                        <div className="column">
                                            <label> Course Name</label>
                                            <div>{props.courseName}</div>
                                        </div>
                                        <div className="column">
                                                <label>Due Date</label>
                                                <div>{props.dueDateFormatted}</div>
                                        </div>
                                </div>
                                <div>
                                            <div className="column">
                                                    <label>Prep Hours</label>
                                                    <div>{props.prephrs}</div>
                                            </div>
                                            <div className="column">
                                                <label> Deliverable Name</label>
                                                <div>{props.deliverableName}</div>
                                            </div> 
                                </div>
                                <div>
                                            <div className="column">
                                                    <label> Description</label>
                                                    <div>{props.desc}</div>
                                            </div>
                                            <div className="column">
                                                    <label> Impact</label>
                                                    <div>{props.inpact}</div>
                                            </div>    
                                </div>
                                
                        </div>
                                 
                </div>
            );
        }