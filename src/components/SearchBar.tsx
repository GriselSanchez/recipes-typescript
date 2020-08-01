import React from 'react';
import Calories from './Calories';
import HealthLabels from './HealthLabels';
interface Props {
  onSearchSubmit: any;
}

interface State {
  ingredients: string;
  calories: { min: string; max: string; total: string };
  labels: string;
}

class SearchBar extends React.Component<Props, State> {
  state: Readonly<State> = {
    ingredients: 'apple',
    calories: { min: '', max: '', total: '' },
    labels: '',
  };

  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ingredients: event.target.value });
  };

  handleCalories = ({ minCalories, maxCalories }: any) => {
    //doesnt work if i dont enter calories
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

  handleLabels = (labels: string[]) => {
    this.setState({ labels: labels.join('%') }, () =>
      console.log('2' + this.state.labels)
    );
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setFinalIngredients(this.state.ingredients);
    this.props.onSearchSubmit(this.state);
    console.log(`lifted up ${this.state.labels}`);
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
        <HealthLabels onLabelsChange={this.handleLabels} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
