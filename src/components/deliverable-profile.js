import React from 'react';

import './css/deliverable-profile.css';

export default function DeliverableProfile(props) {
  
       const prephrsoptions = this.props.allprephrs.map((option, index) => {
                return (
                    <option 
                            key = {index}
                            value={option}
                        >
                               {option}
                    </option>
                );
        });


    return (  
                <div>
                         <div className="course-container-blue tenpx-bottom-margin">
                                <div>
                                    <form>
                                            <div className="center">
                                                    <div className="deliverable-sub-section three-items-top">
                                                            <div className="column">
                                                                <label className="small-titles light-label"> Course Name</label>
                                                                <div className="del-read-only">{this.props.courseName}</div>
                                                            </div>
                                                            <div className="column">
                                                                    <label className="small-titles light-label">Due Date</label>
                                                                    <div className="del-read-only">{this.props.dueDateFormatted}</div>
                                                            </div>
                                                            <div className="column">
                                                                    <label className="small-titles light-label"> Deliverable Name</label>
                                                                    <div className="del-read-only">{this.props.deliverableName}</div>
                                                                </div> 
                                                    </div>
                                                    <div className="deliverable-sub-section three-items-bottom">
                                                            <div className="select-prephrs">
                                                                                <label className="small-titles light-label">Prep Hours</label>
                                                                                <select
                                                                                    className="center"
                                                                                    ref={element => this.prephrs = element}
                                                                                    type="number"
                                                                                    defaultValue="6"
                                                                                    aria-label="prephrs"
                                                                                >
                                                                                <option
                                                                                    key="1"
                                                                                    value={this.props.prephrs}
                                                                                >
                                                                                    {this.props.prephrs}
                                                                                </option>
                                                                                {prephrsoptions}
                                                                                </select>
                                                                </div>
                                                            <div className="select-impact">
                                                                        <label className="small-titles light-label">Impact</label>
                                                                        <select
                                                                                type="text"
                                                                                defaultValue="Moderate"
                                                                                aria-label="Impact"
                                                                        >
                                                                            <option
                                                                                key="1"
                                                                                value={this.props.impact}
                                                                            >
                                                                                {this.props.impact}
                                                                            </option>
                                                                            <option 
                                                                                key = "2"
                                                                                value='Low'
                                                                                >
                                                                                Low
                                                                            </option>
                                                                            <option 
                                                                                key = "3"
                                                                                value='Moderate'
                                                                                >
                                                                                Moderate
                                                                            </option>
                                                                            <option 
                                                                                key = "4"
                                                                                value='High'
                                                                                >
                                                                                High
                                                                            </option>
                                                                            <option 
                                                                                key = "5"
                                                                                value='High Plus'
                                                                                >
                                                                                High-Plus
                                                                            </option>
                                                                        </select>
                                                                </div>    
                                                            <div className="input-desc">
                                                                    <label className="small-titles light-label"> Description</label>
                                                                    <input
                                                                            type="text"
                                                                            defaultValue={this.props.desc}
                                                                            aria-label="Desc"
                                                                        />
                                                                
                                                            </div>
                                                    </div>
                                                    
                                                    <div className="action-btns">
                                                            <button 
                                                                name="action-btn"
                                                                className="green-btn btn-small fivepx-margin" 
                                                                type="submit" 
                                                                value="Update"
                                                            >
                                                                Update
                                                            </button>
                                                            <button 
                                                                name="action-btn"
                                                                className="green-btn btn-small fivepx-margin" 
                                                                type="button"
                                                                value="Delete"
                                                            >
                                                                Delete
                                                            </button>
                                                    </div>
                                            </div>
                                    </form>  
                                </div>
                        </div>   
                </div> 
            );
        } 