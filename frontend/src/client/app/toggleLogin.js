import React from 'react';
import {render} from 'react-dom';

function LoginState(props) {
    return (
        <div>
            <h3>{props.isLoggedIn ? 'Is Signed In' : 'Is Signed Out'}</h3>
        </div>
    )
}

function SignInButton(props) {
    return (
        <div>
            <button onClick={props.onClick}>Sign In</button>
        </div>
    )
}

function SignOutButton(props) {
    return (
        <div>
            <button onClick={props.onClick}>Sign Out</button>
        </div>
    )
}

class ToggleLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true
        };

        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogIn() {
        console.log('handleLogIn', this.state);
        this.setState({
            isLoggedIn: true,
        })
    }

    handleLogOut() {
        console.log('handleLogOut', this.state);
        this.setState({
            isLoggedIn: false
        })
    }


    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const button = isLoggedIn ? (<SignOutButton onClick={this.handleLogOut} />) : (<SignInButton onClick={this.handleLogIn}/>);

        return (
            <div>
                <LoginState isLoggedIn={this.state.isLoggedIn} />
                { button }
            </div>
        )
    }
}

export {ToggleLogin}