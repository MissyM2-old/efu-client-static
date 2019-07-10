import React from 'react';
import {connect} from 'react-redux';

import './css/right-side-drawer.css';

import { Link } from 'react-router-dom';

export function RightSideDrawer (props) {
    
        let drawerClasses = 'right-side-drawer';
        if (props.rightSideDrawerOpen) {
            drawerClasses = 'right-side-drawer drawer-column open';
        }  else {
            drawerClasses='right-side-drawer not-visible';
        }

            return (
                    <div className={drawerClasses} >
                            <div className="menu-item username-background" href="/"> 
                                <div className="">
                                    <div>You are signed in as</div>
                                    <div>{props.currentusername}</div>
                                </div>
                            </div>
                            <div className="menu-item" href="/">
                                <div onClick={props.rightdrawertoggleclickhandler}>
                                    <Link 
                                        className="drawer-navlink"
                                        to={{
                                            pathname: '/courses'
                                        }}
                                        >
                                        Your Courses
                                    </Link>
                                </div>
                            
                            </div>
                            <div className="menu-item" href="/">
                                <div onClick={props.rightdrawertoggleclickhandler}>
                                    <Link 
                                        className="drawer-navlink"
                                        to={{
                                            pathname: '/deliverables',
                                            }}
                                        >
                                        Your Deliverables
                                    </Link>
                                </div>
                            
                            </div>
                            <div className="menu-item drawer-logoutlink-background" href="/">
                                <div onClick={props.rightdrawertoggleclickhandler}>
                                    <Link 
                                        className="drawer-logoutlink"
                                        onClick={props.submitlogout} to="/">
                                        Log out
                                    </Link>
                                </div>
                            </div>
                    </div>
                );

    }
    
    const mapStateToProps = (state) => ({
        todaydeliverables: state.todaydeliverables,
        thisweekdeliverables: state.thisweekdeliverables
    });
    
    export default connect(mapStateToProps)(RightSideDrawer);