import React from 'react';

import './css/term.css';

export default class Term extends React.Component {
   

    setSelectedTerm(e) {
        e.preventDefault();
        const selterm = e.currentTarget.getAttribute("data-identifier");
        props.getcurrentterm(selterm);


    }
    render() {

        let termClasses = 'available-terms';
        // whatever term is in currentterm, the class should be selected
        if (props.currentterm === props.termDesc) {
            termClasses='available-terms selected';
        }
        
        return (
                <div 
                    className={termClasses}
                    data-identifier={props.termDesc}
                    onClick={(e) =>{
                    setSelectedTerm(e)
                }}>
                    {props.termDesc}
                </div>
        );

    }
    
}
