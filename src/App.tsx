import React from 'react';
import './App.css';
import RecipesContainer from './components/RecipesContainer';
import SearchBar from './components/SearchBar';
import { APP_ID, APP_KEY } from './private-config.json';
import RecommendedNutrients from './components/RecommendedNutrients';

const myCredentials = { id: APP_ID, key: APP_KEY };

interface Props {}

interface State {
  ingredients: string;
  calories: string;
  health: string;
}

class App extends React.Component<Props, State> {
  //USAR CONTEXT PARA LAS CREDENCIALES
  state: Readonly<State> = {
    ingredients: 'apple',
    calories: '',
    health: '',
  };

  submitHandler = ({ ingredients, calories, labels }: any) => {
    this.setState({
      ingredients: ingredients,
      calories: calories.total,
      health: labels,
    });
  };

  render() {
    const { ingredients, calories, health } = this.state;

    return (
      <div className="App">
        <h1>Recipe App</h1>
        <SearchBar onSearchSubmit={this.submitHandler} />
        <RecommendedNutrients />
        <RecipesContainer
          credentials={myCredentials}
          ingredients={ingredients}
          calories={calories}
          health={health}
        />
      </div>
    );
  }
}

export default App;
