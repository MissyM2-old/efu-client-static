import React from 'react';
import {connect} from 'react-redux';

import DeliverableProfile from './deliverable-profile';




export class Deliverables extends React.Component {
        render() {
                
                const thistermdeliverables = this.props.thistermdeliverables.map((deliverable, index) => {
                        return (
                                <ul key={index} id={deliverable.id} className="center">
                                        <DeliverableProfile  {...deliverable} />   
                                </ul>
                        );
                });


                const mycoursedropdown = this.props.thistermcourses.map((course, index) => {
                        return (
                            <option 
                                key={index}
                                value={course.courseName}
                                >
                                {course.courseName}
                            </option>
                        );
                    });
                return (
                        <div className="content-sub-container">
                                <div>
                                                <header className="center">
                                                        <h2>My Deliverables</h2>
                                                        <h3>Term: {this.props.currentterm}</h3>
                                                </header>
                                                
                                                <select
                                                        type="text"
                                                        >
                                                                {mycoursedropdown}
                                                </select>
                                                <div>
                                                        {thistermdeliverables}
                                                </div>      
                                        </div>
                        </div>
                        
                );


        } 
} 
        
const mapStateToProps = (state) => ({
        thiscoursedeliverables: state.thiscoursedeliverables,
        thistermdeliverables: state.thistermdeliverables,
        thistermcourses: state.thistermcourses,
        currentterm: state.currentterm
});
        
export default connect(mapStateToProps)(Deliverables);
        
