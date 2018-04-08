// import css
// import style from './application.scss';

// import react
import React from 'react';
import {render} from 'react-dom';

class Application extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Loan Application</h4>
                <input
                    type='text'
                    className='application-inputs__identificator'
                    placeholder='Item Identificator'
                    onChange={this.handleApplicationIdentificator}
                    value={this.props.applicationIdentificator}
                />
                <input
                    type='text'
                    className='application-inputs__description'
                    placeholder='Description'
                    onChange={this.handleApplicationDescription}
                    value={this.props.applicationDescription}
                />
                <input
                    type='text'
                    className='application-inputs__amount-amount'
                    placeholder='Amount'
                    onChange={this.handleApplicationAmountAmount}
                    value={this.props.applicationAmountAmount}
                />
                <input
                    type='text'
                    className='application-inputs__amount-currency'
                    placeholder='Currency'
                    onChange={this.handleApplicationAmountCurrency}
                    value={this.props.applicationAmountCurrency}
                />
                <input
                    type='text'
                    className='application-inputs__bank-account'
                    placeholder='Bank Account'
                    onChange={this.handleApplicationBankAccount}
                    value={this.props.applicationBankAccount}
                />
            </div>
        )
    }
}

export default Application