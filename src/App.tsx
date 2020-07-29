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
}

class App extends React.Component<Props, State> {
  //USAR CONTEXT PARA LAS CREDENCIALES
  state: Readonly<State> = {
    ingredients: 'apple',
    calories: '',
  };

  submitHandler = ({ ingredients, calories }: any) => {
    this.setState({ ingredients: ingredients, calories: calories.total });
  };

  render() {
    const { ingredients, calories } = this.state;

    return (
      <div className="App">
        <h1>Recipe App</h1>
        <SearchBar onSearchSubmit={this.submitHandler} />
        <RecommendedNutrients />
        <RecipesContainer
          credentials={myCredentials}
          ingredients={ingredients}
          calories={calories}
        />
      </div>
    );
  }
}

export default App;
