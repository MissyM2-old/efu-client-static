import React from 'react';

import {Link} from 'react-router-dom';

import './css/add-deliverable-form.css';

export default function AddDeliverableForm(props) {
   
       

            if (!this.state.editing) {
                const text = `Add a Deliverable`;
                return (
                    <div className="blue-btn btn-med tenpx-bottom-margin"
                        onClick={(e) => {
                            e.preventDefault();
                            this.setEditing(true);
                            this.props.setdeliverableadded(false);
                            this.props.setdeliverableupdated(false);
                        }}>
                        <Link to='#'>{text}...</Link>
                    </div>
                )
            }

        return (
                <div className="add-deliverable-form">
                    <form className="del-form">
                        <ul className="unit-container-blue ul-deliverable">
                                <li className="del-row">
                                        <input 
                                                className="del-unit-container fivepx-margin duedate color-dark"
                                                placeholder="Due Date"
                                                type="text"
                                                value="08/022019"
                                                aria-label="dueDate"
                                        />
                                        <select
                                                className="del-unit-container fivepx-margin delname color-dark" 
                                                defaultValue="DEFAULT"
                                                type="text"
                                                aria-label="deliverableName"
                                                >
                                                    <option className="default-value" value="DEFAULT" disabled>What kind of deliverable is this?  Make a choice.</option> 
                                                    <option className="default-value" value="DEFAULT" disabled>Quiz</option>
                                                    <option className="default-value" value="DEFAULT" disabled>Test</option>
                                                    <option className="default-value" value="DEFAULT" disabled>Homework</option>
                                        </select>

                                </li>
                                <li className="del-row">
                                        <input 
                                                className="del-unit-container fivepx-margin desc"
                                                placeholder="Describe what needs to be prepped(i.e. study chapters...)"
                                                type="text"
                                                aria-label="deliverable-desc"
                                        />
                                </li>
                                
                        </ul>
                        <div className="action-btns">
                            <button type="submit" className="blue-btn btn-small fivepx-margin">Add </button>
                            <button className="blue-btn btn-small fivepx-margin" type="button">
                                Cancel
                            </button>    
                        </div>
                    </form> 

                </div>
                
        );
    }

        
   