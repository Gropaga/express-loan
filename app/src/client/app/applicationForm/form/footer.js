// import css
// import style from './client.scss';

// import react
import React from 'react';
import {render} from 'react-dom';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type='button' value='Submit' onClick={this.props.handleSubmit}/>
            </div>
        );
    }
}

export default Footer