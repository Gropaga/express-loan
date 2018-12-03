import React from 'react';
import {render} from 'react-dom';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};


function convertC(temp) {
    return temp * 9 / 5 + 32;
}

function convertF(temp) {
    return (temp -32) * 5 / 9;
}

function convertTemp(temp, convertFunc) {
    const input = parseFloat(temp);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convertFunc(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TempInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div>
                <label>
                    {scaleNames[this.props.scale]}
                </label>
                <input type="text" onChange={this.handleChange} value={this.props.temp} />
            </div>
        )
    }
}

function WillBoil(props) {
    return (
        <h3>{props.temp > 100 ? 'Boils' : 'Water' }</h3>
    );
}

class BoilCalc extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: '',
            scale: 'c'
        };

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temp) {
        this.setState({
            temp: temp,
            scale: 'c'
        });
    }

    handleFahrenheitChange(temp) {
        this.setState({
            temp: temp,
            scale: 'f'
        });
    }

    render() {

        const celsius = this.state.scale === 'f' ? convertTemp(this.state.temp, convertC) : this.state.temp;
        const fahrenheit = this.state.scale === 'c' ? convertTemp(this.state.temp, convertF) : this.state.temp;

        return (
            <div>
                <TempInput temp={celsius} scale={'c'} onChange={this.handleCelsiusChange} />
                <TempInput temp={fahrenheit} scale={'f'} onChange={this.handleFahrenheitChange} />
                <WillBoil temp={celsius} />
            </div>
        )
    }

}

export { BoilCalc };