// import css
// import style from './client.scss';

// import react
import React from 'react';
import {render} from 'react-dom';

class Client extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props);

        return (
            <div className='client-inputs'>
                <h4>Client</h4>
                <input
                    type='text'
                    className='client-inputs__name'
                    placeholder='Name'
                    onChange={this.handleClientName}
                    value={this.props.clientName}
                />
                <input
                    type='text'
                    className='client-inputs__surname'
                    placeholder='Surname'
                    onChange={this.handleClientSurname}
                    value={this.props.clientSurname}
                />
                <input
                    type='text'
                    className='client-inputs__identity-number'
                    placeholder='Identity Number'
                    onChange={this.handleClientIdentityNumber}
                    value={this.props.clientIdentityNumber}
                />
                <input
                    type='text'
                    className='client-inputs__email'
                    placeholder='Email'
                    onChange={this.handleClientEmail}
                    value={this.props.clientEmail}
                />
                <input
                    type='text'
                    className='client-inputs__dob'
                    placeholder='DOB'
                    onChange={this.handleClientDob}
                    value={this.props.clientDob}
                />
                <input
                    type='text'
                    className='client-inputs__tel'
                    placeholder='Telephone'
                    onChange={this.handleClientTel}
                    value={this.props.clientTel}
                />
            </div>
        )
    }
}

export default Client