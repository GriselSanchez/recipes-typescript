import React from 'react';
import Calories from './Calories';

interface Props {
  onSearchSubmit: any;
}

interface State {
  ingredients: string;
  calories: { min: string; max: string; total: string };
}

class SearchBar extends React.Component<Props, State> {
  state: Readonly<State> = {
    ingredients: 'apple',
    calories: { min: '', max: '', total: '' },
  };

  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ingredients: event.target.value });
  };

  handleCalories = ({ minCalories, maxCalories }: any) => {
    this.setState({
      calories: {
        min: minCalories,
        max: maxCalories,
        total: this.getTotalCalories(minCalories, maxCalories),
      },
    });
  };

  getTotalCalories = (minCalories: any, maxCalories: any) => {
    if (minCalories && maxCalories) return `${minCalories}-${maxCalories}`;
    else if (!maxCalories) return `${minCalories}%2B`;
    else return maxCalories;
  };

  setFinalIngredients = (ingredients: string) => {
    this.setState({ ingredients: encodeURI(ingredients) });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setFinalIngredients(this.state.ingredients);
    this.props.onSearchSubmit(this.state);
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder={this.state.ingredients}
          onChange={this.handleInput}
        />
        <Calories onCaloriesChange={this.handleCalories} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
