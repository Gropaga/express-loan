// import css
// import style from './user.scss';

// import react
import React from 'react';
import {render} from 'react-dom';

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='user-inputs'>
                <h4>Login Details</h4>
                <input
                    type='text'
                    className='user-inputs__login'
                    placeholder='Login'
                    onChange={this.handleUserLogin}
                    value={this.props.userLogin}
                />
                <input
                    type='password'
                    className='user-inputs__password'
                    placeholder='Password'
                    onChange={this.handleUserPassword}
                    value={this.props.userPassword}
                />
            </div>
        )
    }
}

export default User