import React from 'react';
import './css/dashboard.css';

export default class AvailableWeek extends React.Component {
    
    setSelectedWeek(e) {
        e.preventDefault();
        const selweek = e.currentTarget.getAttribute("data-identifier");
        props.getcurrentweek(selweek);
    }
    render() {

        let weekClasses = 'available-weeks';
        if (props.currentweek == props.weekNum) {
            weekClasses='available-weeks selected';
        }
        
        return (            
            <div 
                className={weekClasses}
                data-identifier={props.weekNum}
                onClick={(e) =>{
                setSelectedWeek(e)
            }}>
                Week {props.weekNum}
            </div>
        );

    }
    
}
