import React from 'react';
import Recipe from './Recipe';

interface Props {
  credentials: Credential;
  ingredients: string;
  calories: string;
  health: string;
}

interface State {
  recipes: any;
}

interface Credential {
  id: string;
  key: string;
}

const baseURL = 'https://api.edamam.com/api/food-database/v2/parser?';

class RecipesContainer extends React.Component<Props, State> {
  state: Readonly<State> = {
    recipes: [],
  };

  componentDidMount() {
    //this.getRecipes(this.props.credentials);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) this.getRecipes(this.props.credentials);
  }

  async getRecipes(cred: Credential) {
    console.log(this.props);
    const res = await fetch(
      `${baseURL}ingr=${this.props.ingredients}&calories=${this.props.calories}&health=${this.props.health}&app_id=${cred.id}&app_key=${cred.key}`
    );
    const data = await res.json();
    this.setState({ recipes: data.hints });
  }

  render() {
    return (
      <div>
        {this.state.recipes.map((recipe: any) => (
          <Recipe
            key={recipe.food.id}
            recipe={recipe}
            credentials={this.props.credentials}
          />
        ))}
      </div>
    );
  }
}

export default RecipesContainer;
