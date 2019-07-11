import React from 'react';


const DrawerToggleButton = props => (
    <button className="toggle-button" onClick={props.rightdrawertoggleclickhandler}>
        <div className="toggle-button_line"/>
        <div className="toggle-button_line"/>
        <div className="toggle-button_line"/> 
    </button>


);

export default DrawerToggleButton;