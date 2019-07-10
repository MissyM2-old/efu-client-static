import React from 'react';

import './css/home-page.css';

export default function RegistrationPage(props) {
   
       
        return (
            <div className="login-reg-container">
                <div className="login-reg-content">
                            <div className="login-reg-unit">
                                    <form action="/">
                                            <h2 className="heading">Register</h2>
                                            <div className="input-row">
                                                <div className="input-unit">
                                                            <input
                                                                placeholder="Firstname"
                                                                type="text"
                                                                value="Sarah"
                                                                aria-label="firstName"
                                                            />
                                                </div>
                                            </div>
                                            <div className="input-row">
                                                <div className="input-unit">
                                                            <input
                                                                refs="lastName"
                                                                placeholder="Lastname"
                                                                type="text"
                                                                value="Student"
                                                                aria-label="lastName"
                                                            />
                                                </div>
                                            </div>
                                            <div className="input-row">
                                                <div className="input-unit">
                                                            <input
                                                                placeholder="Username"
                                                                type="text"
                                                                value="sarah@gmail.com"
                                                                aria-label="username"
                                                            />
                                                </div>
                                            </div>
                                            <div className="input-row">
                                                <div className="input-unit">
                                                            <input
                                                                placeholder="Password"
                                                                type="password"
                                                                value="sarah9515"
                                                                aria-label="password"
                                                            />
                                                </div>
                                            </div>
                                            <div className="button-row">
                                        <button type="submit" className="green-btn btn-small" >Create New Account</button>
                                    </div>
                                    </form>
                            </div>

                            <div className="login-other-unit">
                                    <div className="instructions-small">
                                        <div>Already have an account?</div>
                                        <div>
                                            <button className="green-btn btn-small button-row" type="submit">
                                                    Log In
                                            </button>      
                                        </div> 
                                    </div>
                            </div>

                </div>
            </div>
            );
    } 
