import React from 'react';
import './ToggleButton.css'

const toggleButton = props  => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
    </button>
);

export default toggleButton;