import React from 'react';
import './css/modal.css';

export default class Modal extends React.Component {

    setSelectedTerm(e) {
        e.preventDefault();
        setState({
            termSelected: e.target.value
        }, () => {
            props.setcurrentterm(state.termSelected);
            props.getcurrentweekdetails();
            props.setPageFlags("Dashboard");
        });
    }

    render() {

        const allterms = props.terms.map((term, index) => {
            return (
                <option 
                    key={index}
                    value={term.termDesc}
                    data-identifier={term.termDesc}
                    onChange={setSelectedTerm}
                >
                    {term.termDesc}
                </option>
            );
        });
        return (
            <div className="modal">
                    <header className="modal__header">Term</header>
                    <section className="modal__content">
                        <div>
                            <select
                                className="hundredpercent-width"
                                defaultValue={'DEFAULT'}
                                onChange={setSelectedTerm}
                                >
                                    <option value="DEFAULT" disabled>Select an Academic Term...</option> 
                                    {allterms}
                            </select>
                        </div>
                        
                            
                    </section>
                    
            </div>

        )
    }
}
