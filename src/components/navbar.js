import React from 'react';

import DrawerToggleButton from './drawer-toggle-button';
import Suggestion from './suggestion';

import './css/navbar.css';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
        return (
            <header className="navbar">
            <nav className="navbar_navigation" role="navigation" aria-label="navbar_navigation">
                <div className="logo-navbar-positioning">
                        <div className="navbar-item navbar_logo ">
                                <Link className="logo-group link logo" to="/dashboard">
                                    <div className="logo-verbage">
                                        Executive FollowUp
                                    </div>
                                        
                                </Link>
                        </div>
                        <div className="navbar-positioning spacer" />
                        <div className="suggestion-div">
                            <Suggestion />
                        </div>
                        
                </div>
                
                <div className="navbar-positioning">
                        <div className="navbar_navigation-items terms">
                            <ul className="nav-ul">
                                <li className="navbar-item term-unit">
                                    <div>
                                        <div className="hundredpercent-width fivepx-margin">
                                                <div className="hundredpercent-width">
                                                       Summer (4 weeks)
                                                </div>
                                                
                                        </div>
                                    </div>
                                </li>
                                <li className="navbar-item review-unit">
                                    <div className="navbar-cell review-link">
                                        <Link
                                            to={{
                                                pathname: '/review-current-week'
                                                }
                                            }
                                            >
                                            Update Week
                                        </Link>
                                    </div>
                                    <div className="navbar-cell weeks-link">
                                        <Link 
                                            to={{
                                                pathname: '/weeks'
                                                }
                                            }
                                            >
                                            View Weeks
                                        </Link>
                                    </div>
                                    <div className="navbar-cell spacer-hamburger"></div>
                                    <div className="navbar-cell navbar_right-toggle-button fivepx-margin">
                                        <DrawerToggleButton />
                                    </div>
                                </li>
                            </ul>
                        </div>
                </div>
             </nav>
             </header>
        );
    }





    
   