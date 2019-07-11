import React from 'react';
import {connect} from 'react-redux';

import Suggestion from './suggestion';

import './css/navbar.css';
import { Link } from 'react-router-dom';

export class NavBar extends React.Component{
    render() {
            const currentsuggestion = this.props.currentsuggestion.map(suggestion => {
                return (
                   <Suggestion {...suggestion} />
                );
            });

            const allterms = this.props.terms.map(term => {
                return (
                    <option>{term.termDesc}</option>
                );
            });

        return (
            <nav>
                <div>
                    <Link to="/dashboard">
                            <h2>Executive FollowUp</h2>
                    </Link>
                </div>
                
                <div>
                    <select type="text">
                                    {allterms}
                    </select>
                </div>
                <div>
                        <ul className="medium-width">
                            <li>
                                <button><Link to={'/review-current-week'}>Update Week</Link></button>
                            </li>
                            <li>
                                <button><Link to={'/weeks'}>View Weeks</Link></button>
                            </li>
                            <li>
                                <button><Link to={'/courses'}>Your Courses</Link></button>
                            </li>
                            <li>
                                <button><Link to={'/deliverables'}>Your Deliverables</Link></button>
                            </li>
                            <li>
                                <button><Link to={'/'}>Log Out</Link></button>
                            </li>
                        </ul>

                </div>  

                <div className="suggestion-div">
                    {currentsuggestion}
                </div>
             </nav>
            
        );
    }
}

     const mapStateToProps = (state) => ({
        currentsuggestion: state.currentsuggestion,
        terms: state.terms
    });
    
    export default connect(mapStateToProps)(NavBar);

    



    
   