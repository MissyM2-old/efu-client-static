import React from 'react';
import {connect} from 'react-redux';


import Course from './course';



export class Courses extends React.Component{
    render() {

        const mycourses = this.props.thistermcourses.map(course => {
            return (
                <li className="border">
                    <Course {...course} />
                </li>
            );
        });

        return (
                <div className="content-sub-container">
                    <header>
                        <h2>My courses</h2>
                        <h3>Term:  {this.props.currentterm}</h3>
                    </header>
                    <div className="small-width">
                        {mycourses}
                    </div>
                </div>
        );

    }
}

    const mapStateToProps = (state) => ({
        thistermcourses: state.thistermcourses,
        currentterm: state.currentterm
    });
    
    export default connect(mapStateToProps)(Courses);

    