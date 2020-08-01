import React, { Component } from 'react';
import Label from './Label';

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
      : (newLabels = labels.filter(l => l !== value));

    this.setState({ labels: newLabels }, () => this.props.onLabelChange('labels', this.state.labels.join('%')));
  };

  render() {
    return (
      <div>
        <Label name="dairy-free" onLabelChange={this.handleCheckbox} />
        <Label name="fish-free" onLabelChange={this.handleCheckbox} />
        <Label name="gluten-free" onLabelChange={this.handleCheckbox} />
        <Label name="kosher" onLabelChange={this.handleCheckbox} />
        <Label name="low-sugar" onLabelChange={this.handleCheckbox} />
        <Label name="paleo" onLabelChange={this.handleCheckbox} />
        <Label name="peanut-free" onLabelChange={this.handleCheckbox} />
        <Label name="pecatarian" onLabelChange={this.handleCheckbox} />
        <Label name="vegetarian" onLabelChange={this.handleCheckbox} />
        <Label name="vegan" onLabelChange={this.handleCheckbox} />
        <Label name="soy-free" onLabelChange={this.handleCheckbox} />
      </div>
    );
  }
}
