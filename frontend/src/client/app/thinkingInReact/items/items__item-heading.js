// import css
import style from './items.scss';

// import react
import React from 'react';
import {render} from 'react-dom';

class ItemHeading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='item item_item-type-heading item__double-column'>
                <div className='item__double-column'>
                    {this.props.heading}
                </div>
            </div>
        )
    }
}

export { ItemHeading }