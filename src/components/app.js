import React from 'react';
import {BrowserRouter as Router, 
    Route, 
    Switch
} from 'react-router-dom';

import HomePage from './home-page';
import NavBar from './navbar';
import Dashboard from './dashboard';
import Courses from './courses';
import Weeks from './weeks';
import ReviewCurrentWeek from './review-current-week';
import Deliverables from './deliverables';

export default function App(props) {
  
        return (

            <Router>
                <div className="app">
                    <NavBar />
                    <main>
                        <Switch>
                            <Route exact path="/" component={HomePage} /> 
                            <Route exact path="/navbar" component={NavBar} /> 
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/weeks" component={Weeks} /> 
                            <Route exact path="/courses" component={Courses} /> 
                            <Route exact path="/deliverables" component={Deliverables} /> 
                            <Route exact path="/review-current-week" component={ReviewCurrentWeek} />
                        </Switch>
                        
                    </main>
                         
                </div>
            </Router>
        );
    }  

