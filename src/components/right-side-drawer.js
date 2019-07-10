import React from 'react';

import './css/right-side-drawer.css';

import { Link } from 'react-router-dom';

export default class RightSideDrawer extends React.Component {
    
    render() {
        let drawerClasses = 'right-side-drawer';
        if (this.props.rightSideDrawerOpen) {
            drawerClasses = 'right-side-drawer drawer-column open';
        }  else {
            drawerClasses='right-side-drawer not-visible';
        }

            return (
                    <div className={drawerClasses} >
                            <div className="menu-item username-background" href="/"> 
                                <div className="">
                                    <div>You are signed in as</div>
                                    <div>{this.props.currentusername}</div>
                                </div>
                            </div>
                            <div className="menu-item" href="/">
                                <div onClick={this.props.rightdrawertoggleclickhandler}>
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
                                <div onClick={this.props.rightdrawertoggleclickhandler}>
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
                                <div onClick={this.props.rightdrawertoggleclickhandler}>
                                    <Link 
                                        className="drawer-logoutlink"
                                        onClick={this.props.submitlogout} to="/">
                                        Log out
                                    </Link>
                                </div>
                            </div>
                    </div>
                );

    }
    
}