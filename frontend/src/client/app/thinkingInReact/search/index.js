import React from 'react';
import {render} from 'react-dom';
import style from './search.scss';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    }

    handleSearchInputChange(event) {
        this.props.onSearchInputChange(event.target.value);
    }

    handleCheckboxChange(event) {
        this.props.onStockCheckboxChange(event.target.checked);
    }

    render() {
        return (
            <div className='search'>
                <input
                    className='search__input'
                    placeholder='Search...'
                    onChange={this.handleSearchInputChange}
                    value={this.props.searchInput}
                />
                <span className='search__stock-trigger-container'>
                    <input
                        className='search__stock-trigger-checkbox'
                        checked={this.props.showNonStocked}
                        type='checkbox'
                        onChange={this.handleCheckboxChange}
                    />
                    <label className='search__stock-trigger-label'>
                        Only show products in stock
                    </label>
                </span>
            </div>
        )
    }
}

export {Search}