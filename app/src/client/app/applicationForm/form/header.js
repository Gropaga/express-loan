import React from 'react';
import {render} from 'react-dom';

function Header(props) {
    return (
        <h3>{props.headerText}</h3>
    )
}

export default Header