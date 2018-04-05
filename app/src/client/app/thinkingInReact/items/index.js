// import css
import style from './items.scss';

// import react
import React from 'react';
import {render} from 'react-dom';

// import blocks and elements
import {ItemHeading} from "./items__item-heading";
import {Item} from "./items__item";

class Items extends React.Component {
    constructor(props) {
        super(props);
    }

    showHeader(currentValue, showNonStocked, searchInput, lastCategory) {
        return (
            lastCategory !== currentValue.category &&
            this.showItem(currentValue, showNonStocked, searchInput)
        );
    }

    showItem(currentValue, showNonStocked, searchInput) {
        return (currentValue.stocked === true ||
            currentValue.stocked === false && showNonStocked === true) &&
            currentValue.name.includes(searchInput);
    }

    render() {
        let lastCategory = '';
        const itemListReducer = (accumulator, currentValue) => {
            const showItemArgs = [
                currentValue,
                this.props.showNonStocked,
                this.props.searchInput
            ];

            if (this.showHeader(...showItemArgs, lastCategory)) {
                lastCategory = currentValue.category;
                accumulator.push(
                    <ItemHeading
                        heading={lastCategory}
                        key={currentValue.category}
                    />
                )
            }

            if (this.showItem(...showItemArgs))
                accumulator.push(
                    <Item
                        key={currentValue.name}
                        itemName={currentValue.name}
                        itemPrice={currentValue.price}
                        stocked={currentValue.stocked}
                    />
                );

            return accumulator;
        };
        const items = this.props.itemList.reduce(itemListReducer, []);

        return (
            <div className='items'>
                <div className='item item_top-heading'>
                    <div className='item__column'>Name</div>
                    <div className='item__column'>Price</div>
                </div>
                {items}
            </div>
        )
    }
}

export { Items }