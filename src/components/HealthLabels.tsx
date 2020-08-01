import React, { Component } from 'react';

interface State {
  labels: string[];
}

interface Props {
  onLabelsChange: any;
}
export default class HealthLabels extends Component<Props, State> {
  state: Readonly<State> = {
    labels: [],
  };

  handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    let labels = this.state.labels;
    const value = event.target.value;

    event.target.checked
      ? (labels = [...labels, value])
      : (labels = labels.filter((l) => l !== value));

    this.setState({ labels: labels }, () =>
      this.props.onLabelsChange(this.state.labels)
    );
  };

  render() {
    return (
      <div>
        <label>
          dairy-free
          <input
            type="checkbox"
            value="dairy-free"
            name="dairy-free"
            onChange={this.handleCheckbox}
          ></input>
        </label>
        <label>
          low-sugar
          <input
            type="checkbox"
            value="low-sugar"
            name="low-sugar"
            onChange={this.handleCheckbox}
          ></input>
        </label>
        <label>
          vegetarian
          <input
            type="checkbox"
            value="vegetarian"
            name="vegetarian"
            onChange={this.handleCheckbox}
          ></input>
        </label>
      </div>
    );
  }
}
