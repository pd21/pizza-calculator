import React, { Component } from 'react';
import PizzaCalculator from './pizzaCalculator'

import calculatePizzasNeeded from './lib/calculate-pizzas-needed';

const initialState = {
  numberOfPeople: 10,
  slicesPerPerson: 2,
};

const WithPizzaCalculations = WrappedComponent => class extends Component {
  
  static displayName = `WithPizzaCalculations(${WrappedComponent.displayName || WrappedComponent.name})`
  state = { ...initialState };
 
  updateNumberOfPeople = event => {
    const numberOfPeople = parseInt(event.target.value, 10);
    this.setState({ numberOfPeople });
  };

  updateSlicesPerPerson = event => {
    const slicesPerPerson = parseInt(event.target.value, 10);
    this.setState({ slicesPerPerson });
  };

  reset = event => {
    this.setState({ ...initialState });
  };

  render() {
    const { numberOfPeople, slicesPerPerson } = this.state;
    const numberOfPizzas = calculatePizzasNeeded(
      numberOfPeople,
      slicesPerPerson,
    );

    return (
      <WrappedComponent 
        numberOfPizzas={numberOfPizzas}
        numberOfPeople={numberOfPeople}
        slicesPerPerson={slicesPerPerson}
        updateSlicesPerPerson={this.updateSlicesPerPerson}
        updateNumberOfPeople={this.updateNumberOfPeople}
        reset={this.reset}
      />
    );
  }
}

const NewComponent = WithPizzaCalculations(PizzaCalculator)

export default class Application extends Component{
  render(){
    return (
      <NewComponent />
    )
  }
}