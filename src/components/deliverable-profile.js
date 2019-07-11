import React from 'react';

import {connect} from 'react-redux';

export class DeliverableProfile extends React.Component {
    render() {
  
       const prephrsoptions = this.props.allprephrs.map(option => {
                return (
                    <option value={option}>{option}</option>
                );
        });


    return (  
                <div className="row border center medium-width">
                         <div>
                                <div>
                                    <form>
                                            <div className="center">
                                                    <div className="row" >
                                                            <div className="column">
                                                                <label> Course Name</label>
                                                                <div>{this.props.courseName}</div>
                                                            </div>
                                                            <div className="column">
                                                                    <label>Due Date</label>
                                                                    <div>{this.props.dueDateFormatted}</div>
                                                            </div>
                                                            <div className="column">
                                                                    <label> Deliverable Name</label>
                                                                    <div>{this.props.deliverableName}</div>
                                                                </div> 
                                                    </div>
                                                    <div>
                                                            <div>
                                                                                <label>Prep Hours</label>
                                                                                <select
                                                                                    type="number"
                                                                                    defaultValue="6"
                                                                                    aria-label="prephrs"
                                                                                >
                                                                                <option>
                                                                                    {this.props.prephrs}
                                                                                </option>
                                                                                {prephrsoptions}
                                                                                </select>
                                                                </div>
                                                            <div>
                                                                        <label>Impact</label>
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
                                                            <div>
                                                                    <label> Description</label>
                                                                    <input
                                                                            type="text"
                                                                            defaultValue={this.props.desc}
                                                                            aria-label="Desc"
                                                                        />
                                                                
                                                            </div>
                                                    </div>
                                                    
                                                    <div>
                                                            <button 
                                                                type="submit" 
                                                                value="Update"
                                                            >
                                                                Update
                                                            </button>
                                                            <button 
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
    }

        const mapStateToProps = (state) => ({
            allprephrs: state.allprephrs
        });
        
        export default connect(mapStateToProps)(DeliverableProfile);