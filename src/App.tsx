import React from 'react';
import './App.css';
import RecipesContainer from './components/RecipesContainer';
import SearchBar from './components/SearchBar';
import { APP_ID, APP_KEY } from './private-config.json';

const myCredentials = { id: APP_ID, key: APP_KEY };

interface Props {}

interface State {
  ingredients: string;
}

class App extends React.Component<Props, State> {
  //USAR CONTEXT PARA LAS CREDENCIALES
  state: Readonly<State> = {
    ingredients: 'apple',
  };

  submitHandler = (ingredients: string) => {
    const finalSearch = ingredients.replace(' ', '%20');
    this.setState({ ingredients: finalSearch });
  };

  render() {
    const { ingredients } = this.state;

    return (
      <div className="App">
        <h1>Recipe App</h1>
        <SearchBar onSearchSubmit={this.submitHandler} />
        <RecipesContainer
          credentials={myCredentials}
          ingredients={ingredients}
        />
      </div>
    );
  }
}

export default App;
