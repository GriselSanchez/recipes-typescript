import React from 'react';

interface Props {
  onCalorieChange: any;
}

interface State {
  minCalories: string;
  maxCalories: string;
  total: string;
}

export default class Calories extends React.Component<Props, State> {
  state: Readonly<State> = {
    minCalories: '',
    maxCalories: '',
    total: ''
  };

  handleCalories = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = event;
    // @ts-ignore
    this.setState({ [name]: value }, this.sendTotalCalories);
  }

  getTotalCalories = () => {
    const { minCalories, maxCalories } = this.state;

    if (minCalories && maxCalories) return `${minCalories}-${maxCalories}`;
    else if (!maxCalories) return `${minCalories}%2B`;
    else return maxCalories;
  };

  sendTotalCalories = () => {
    this.setState(
      { total: this.getTotalCalories() },
      () => this.props.onCalorieChange('totalCalories', this.state.total)
    );
  }

  render() {
    return (
      <div>
        <input
          type="number"
          name="minCalories"
          placeholder="Min Calories"
          onInput={this.handleCalories}
        ></input>
        <input
          type="number"
          name="maxCalories"
          placeholder="Max Calories"
          onInput={this.handleCalories}
        ></input>
      </div>
    );
  }
}
