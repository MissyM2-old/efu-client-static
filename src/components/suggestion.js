import React from 'react';

import './css/suggestion.css';

class Suggestion extends React.Component {
    render() {
        return (
            <ul className="skills-suggestion"> 
                    <li>
                        <div>Study Skills</div> 
                    </li>
                    <li>
                    <div>print things out</div>
                    <div>~ anonymous</div>

                    </li>
            </ul> 
        );
    }
    
}

export default Suggestion;