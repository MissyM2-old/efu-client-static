import React from "react";
import './css/home-page.css';
import LoginPage from './login-page';

export default function HomePage(props) {
        return (
              <div className="homepage-container">
                  <div className="logo-container">
                            <div className="title-div">
                                <div className="homepage-welcome">Welcome to</div>
                                <div className="homepage-title">Executive Followup</div>

                            </div>
                            <h3 className="homepage-tagline">
                                The app for students to get control of their 
                                course deliverables and grades
                            </h3>
                            
                    </div>
                    
                        <div>
                                <LoginPage />
                        </div>          
                                    
              </div>
        );
    }

