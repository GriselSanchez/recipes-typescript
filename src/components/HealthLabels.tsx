import React, { Component } from 'react';

interface State {
  labels: string[];
}

interface Props {
  onLabelChange: any;
}
export default class HealthLabels extends Component<Props, State> {
  state: Readonly<State> = {
    labels: [],
  };

  handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newLabels;
    const { labels } = this.state;
    const { value, checked } = event.target;

    checked
      ? (newLabels = [...labels, value])
      : (newLabels = labels.filter((l) => l !== value));

    this.setState({ labels: newLabels }, () => this.props.onLabelChange('labels', this.state.labels.join('%')));
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
