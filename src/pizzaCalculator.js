import React, { Component } from 'react';

import Title from './Title';
import Input from './Input';
import Result from './Result';

export default class PizzaCalculator extends Component {
    render() {
        const { numberOfPeople, slicesPerPerson, numberOfPizzas } = this.props
        return (
            <div className="Application">
                <Title />
                <Input
                    label="Number of Guests"
                    type="number"
                    min={0}
                    value={numberOfPeople}
                    onChange={this.props.updateNumberOfPeople}
                />
                <Input
                    label="Slices Per Person"
                    type="number"
                    min={0}
                    value={slicesPerPerson}
                    onChange={this.props.updateSlicesPerPerson}
                />
                <Result amount={numberOfPizzas} />
                <button className="full-width" onClick={this.props.reset}>
                    Reset
                </button>
            </div>
        );
    }
}
