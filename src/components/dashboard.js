import React from 'react';
import {connect} from 'react-redux';

import './css/dashboard.css';

import Deliverable from './deliverable';

export class Dashboard extends React.Component {
    render() {
            const todaydeliverables = this.props.todaydeliverables.map((deliverable, index) => {
                return (
                    <ul>
                        <Deliverable
                                {...deliverable}
                        />     
                    </ul>
                    
                );
            });

            const thisweekdeliverables = this.props.thisweekdeliverables.map((deliverable, index) => {
                return (
                    <ul>
                        <Deliverable
                            {...deliverable}
                        />                                                       
                    </ul>
                );
            })
    
            return (
                <div className="content-sub-container">
                    <div>
                        <header>
                                        <h2>Your Dashboard</h2>
                                        <h3>Term:  Summer (4 weeks)</h3>
                                        <div></div>
                                        <div className="whats-due">What is Due?</div>
                        </header>
                        <div>
                            <div>
                                    <div className="center background-color-white">
                                            <h3>Deliverables Due Today</h3>
                                            <div>
                                                <h3>{this.props.currentdate}</h3>
                                                <h3>Total Time Required: 2</h3>
                                            </div>
                                    </div>
                                    <div>
                                       {todaydeliverables}
                                    </div> 
                                
                            </div>
                            <div>
                                <div className="center background-color-white">
                                        <h3>Deliverables Due This Week</h3>
                                        <h3>Between 07/07/2019 and 07/14/2019</h3>
                                        <h3>Total Time Required: 12</h3>
                                </div>
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
        thisweekdeliverables: state.thisweekdeliverables,
        currentdate: state.currentdate
    });
    
    export default connect(mapStateToProps)(Dashboard);
