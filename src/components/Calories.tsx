import React from 'react';

interface Props {
  onCaloriesChange: any;
}

interface State {
  minCalories: string;
  maxCalories: string;
}

export default class Calories extends React.Component<Props, State> {
  state: Readonly<State> = {
    minCalories: '',
    maxCalories: '',
  };

  handleMinCalories = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ minCalories: event.target.value }, () =>
      this.props.onCaloriesChange(this.state)
    );
  };

  handleMaxCalories = (event: React.ChangeEvent<HTMLInputElement>) => {
    //recordar que setState es asincrono
    this.setState({ maxCalories: event.target.value }, () =>
      this.props.onCaloriesChange(this.state)
    );
  };

  render() {
    return (
      <div>
        <input
          type="number"
          placeholder="min-calories"
          onInput={this.handleMinCalories}
        ></input>
        <input
          type="number"
          placeholder="max-calories"
          onInput={this.handleMaxCalories}
        ></input>
      </div>
    );
  }
}
