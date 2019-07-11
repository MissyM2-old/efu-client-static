import React from 'react';

 function Suggestion(props) {
        return (
            <ul className="skills-suggestion"> 
                    <li>
                        <div>{props.category}</div> 
                    </li>
                    <li>
                    <div>{props.desc}</div>
                    <div>~ {props.credit}</div>

                    </li>
            </ul> 
        );
}

export default Suggestion;