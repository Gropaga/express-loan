import React from 'react';
import {render} from 'react-dom';
import {Search} from "./search";
import {Items} from "./items";
import style from './style.scss'

const itemList = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class ThinkingInReact extends React.Component {
    constructor(props) {
        super(props);

        this.onStockCheckboxChange = this.onStockCheckboxChange.bind(this);
        this.onSearchInputChange = this.onSearchInputChange.bind(this);

        this.state = {
            showNonStocked: true,
            searchInput: ''
        };
    }

    onStockCheckboxChange(showNonStocked) {
        this.setState({
            showNonStocked: showNonStocked
        })
    };

    onSearchInputChange(searchInput) {
        this.setState({
            searchInput: searchInput
        })
    };

    render() {
        return (
            <div>
                <Search
                    onStockCheckboxChange={this.onStockCheckboxChange}
                    onSearchInputChange={this.onSearchInputChange}
                    showNonStocked={this.state.showNonStocked}
                    searchInput={this.state.searchInput}
                />
                <Items
                    itemList={itemList}
                    showNonStocked={this.state.showNonStocked}
                    searchInput={this.state.searchInput}
                />
            </div>
        )
    }
}

render(<ThinkingInReact/>, document.getElementById('thinkingReact'));