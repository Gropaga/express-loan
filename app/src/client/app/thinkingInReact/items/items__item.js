// import css
import style from './items.scss';

// import react
import React from 'react';
import {render} from 'react-dom';

class Item extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const itemClass = this.props.stocked ?
            'item__column' :
            'item__column item__column_not-in-stock';

        return (
            <div className='item'>
                <div className={ itemClass }>{this.props.itemName}</div>
                <div className='item__column'>{this.props.itemPrice}</div>
            </div>
        )
    }
}

export { Item }