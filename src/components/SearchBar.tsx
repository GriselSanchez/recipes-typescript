import React from 'react';
import Calories from './Calories';
import HealthLabels from './HealthLabels';
import Ingredients from './Ingredients';
interface Props {
  onSearchSubmit: any;
}

interface State {
  ingredients: string;
  totalCalories: string;
  labels: string;
}

class SearchBar extends React.Component<Props, State> {
  state: Readonly<State> = {
    ingredients: 'apple',
    totalCalories: '',
    labels: '',
  };

  handleInput = (field: string, value: string) => {
    // @ts-ignore
    this.setState({ [field]: value });
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Ingredients onIngredientChange={this.handleInput} />
        <Calories onCalorieChange={this.handleInput} />
        <HealthLabels onLabelChange={this.handleInput} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
