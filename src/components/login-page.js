import React from 'react';
import {Link} from 'react-router-dom';

export default function LoginPage(props) {

            return (
                <div className="center border">
                    <div >
                            <div>
                                <form action="/"  >
                                    <h2>Login</h2>
                                    <div>
                                                <input
                                                    placeholder="Username"
                                                    type="text"
                                                    size= "30"
                                                    value="cat@gmail.com"
                                                    aria-label="username"
                                                />
                                    </div>
                                    <div>
                                                <input
                                                    placeholder="Password"
                                                    type="password"
                                                    size="30"
                                                    name="password"
                                                    value="cat9515"
                                                    aria-label="password"
                                                />
                                    </div>
                                    <div className="button-row">

                                    <Link to="/dashboard">
                                        <button type="submit">Login</button>
                                    </Link>
                                    </div>
                                </form>
                            </div>
                            <div>
                                    <div >
                                        <h4>Don't have an account?</h4>
                                        <div>
                                            <button type="button">
                                                Create One
                                            </button>      
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>
                
            ); 
        }


