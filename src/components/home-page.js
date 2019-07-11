import React from "react";
import './css/home-page.css';
import LoginPage from './login-page';

export default function HomePage(props) {
        return (
              <div className="content-sub-container">
                  <div className="logo-container">
                            <div>
                                <h2>Welcome to</h2>
                                <h3>Executive Followup</h3>

                            </div>
                            <h4>
                                The app for students to get control of their 
                                course deliverables and grades
                            </h4>
                            
                    </div>
                    
                        <div className="small-width">
                                <LoginPage />
                        </div>          
                                    
              </div>
        );
    }

