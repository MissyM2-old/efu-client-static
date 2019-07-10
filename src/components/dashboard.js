import React from 'react';
import {connect} from 'react-redux';

import './css/dashboard.css';


import NavBar from "./navbar";
import Deliverable from './deliverable';

export class Dashboard extends React.Component {
render() {
    const todaydeliverables = todaydeliverables.map((deliverable, index) => {
        return (
            <ul key={index} className="deliverable-container-green fivepx-margin">
                <Deliverable
                        {...deliverable}
                />     
            </ul>
            
        );
    });

    const thisweekdeliverables = thisweekdeliverables.map((deliverable, index) => {
        return (
            <ul key={index} className="deliverable-container-green fivepx-margin">
                <Deliverable
                    {...deliverable}
                />                                                       
            </ul>
        );
    })

            return (
                <div className="content-container">
                    <NavBar />
                    <div>
                        <header className="page-header">
                                        <h2>Your Dashboard</h2>
                                        <h3>Term:  Summer (4 weeks)</h3>
                                        <div></div>
                                        <div className="whats-due">What is Due?</div>
                                    </header>
                        <div className="section-container">
                            <div className="unit-container-blue hundredpercent-width tenpx-bottom-margin">
                                    <div className="dels-header">
                                            <div className="dels-label">Deliverables Due Today</div>
                                            <div className="dels-subhead">
                                                <div className="dels-date">Monday, July 9</div>
                                                <div className="dels-date">Total Time Required: 2</div>
                                            </div>
                                    </div>
                                    <ul className="row-week-list-labels background-color-green color-light">
                                                <li className="week-list-label">Course Name</li>
                                                <li className="week-list-label">Due Date</li>
                                                <li className="week-list-label">Impact</li>
                                                <li className="week-list-label">Prep Hours</li>
                                                <li className="week-list-label">Item Name</li>
                                                <li className="week-list-label">Notes</li>
                                    </ul>
                                    <div>
                                       {todaydeliverables}
                                    </div> 
                                
                            </div>
                            <div className="unit-container-blue hundredpercent-width tenpx-bottom-margin">
                                <div className="dels-header">
                                        <div className="dels-label">Deliverables Due This Week</div>
                                        <div className="dels-date">Between 07/07/2019 and 07/14/2019</div>
                                        <div className="dels-date">Total Time Required: 12</div>
                                </div>
                                <ul className="row-week-list-labels background-color-green color-light">
                                            <li className="week-list-label">Course Name</li>
                                            <li className="week-list-label">Due Date</li>
                                            <li className="week-list-label">Impact</li>
                                            <li className="week-list-label">Prep Hours</li>
                                            <li className="week-list-label">Item Name</li>
                                            <li className="week-list-label">Notes</li>
                                </ul>  
                                <div>
                                {thisweekdeliverables}
                                </div>  
                            </div>   
                        </div>
                    </div>
                </div>
            );
        }
    }

    const mapStateToProps = (state) => ({
        todaydeliverables: state.todaydeliverables,
        thisweekdeliverables: state.thisweekdeliverables
    });
    
    export default connect(mapStateToProps)(Dashboard);
