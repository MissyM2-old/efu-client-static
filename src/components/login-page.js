import React from 'react';
import {Link} from 'react-router-dom';

import './css/home-page.css';

export default function LoginPage(props) {

            return (
                <div className="login-reg-container">
                    <div className="login-reg-content">
                            <div className="login-reg-unit">
                                <form action="/"  >
                                    <h2 className="heading">Login</h2>
                                    <div className="input-row">
                                        <div className="input-unit">
                                                <input
                                                    placeholder="Username"
                                                    type="text"
                                                    size= "30"
                                                    value="cat@gmail.com"
                                                    aria-label="username"
                                                />
                                        </div>
                                    </div>
                                    <div className="input-row">
                                        <div className="input-unit">
                                                <input
                                                    placeholder="Password"
                                                    type="password"
                                                    size="30"
                                                    name="password"
                                                    value="cat9515"
                                                    aria-label="password"
                                                />
                                        </div>
                                    </div>
                                    <div className="button-row">

                                    <Link to="/dashboard">
                                        <button type="submit" className="green-btn btn-med fivepx-margin">Login</button>
                                    </Link>
                                    </div>
                                </form>
                            </div>
                            <div className="login-other-unit">
                                    <div className="login-reg-instructions">
                                        <h4>Don't have an account?</h4>
                                        <div>
                                            <button className="green-btn btn-med fivepx-margin" type="button">
                                                Create One
                                            </button>      
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>
                
            ); 
        }


