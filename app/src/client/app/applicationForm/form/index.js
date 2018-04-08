// import css
// import style from './form.scss';

// import react
import React from 'react';
import {render} from 'react-dom';

import Header from './header';
import Client from './client';
import Application from './application';
import User from './user';
import Footer from './footer';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValues: defaultValues
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        alert('handle submit');
    }

    render() {

        console.log(this.state);

        return (
            <form>
                <Header headerText='Complete Loan Form' />
                <Client { ...this.state.inputValues } />
                <Application { ...this.state.inputValues } />
                <User { ...this.state.inputValues } />
                <Footer handleSubmit={this.handleSubmit} />
            </form>
        )
    }
}

const defaultValues = {
    // Client
    clientName: 'Max',
    clientSurname: 'Vorobjovs',
    clientIdentityNumber: '061287-11651',
    clientEmail: 'maksims@vorobjovs.lv',
    clientDob: '06-12-1987',
    clientTel: '25633616',
    // Application
    applicationIdentificator: '0000001',
    applicationDescription: 'iPhone 8 128Gb',
    applicationAmountAmount: '800',
    applicationAmountCurrency: 'EUR',
    applicationBankAccount: 'LV80BANK0000435195001',
    // Login details
    userLogin: 'maksims@vorobjovs.lv',
    userPassword: 'Test1234',
};

export default Form