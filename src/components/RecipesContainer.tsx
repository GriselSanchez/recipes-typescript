import React from 'react';
import Recipe from './Recipe';

interface Props {
  credentials: Credential;
  ingredients: string;
}

interface State {
  recipes: any;
}

interface Credential {
  id: string;
  key: string;
}

class RecipesContainer extends React.Component<Props, State> {
  state: Readonly<State> = {
    recipes: [],
  };

  componentDidMount() {
    this.getRecipes(this.props.credentials);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.ingredients !== this.props.ingredients) {
      this.getRecipes(this.props.credentials);
    }
  }

  async getRecipes(cred: Credential) {
    const res = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?ingr=${this.props.ingredients}&app_id=${cred.id}&app_key=${cred.key}`
    );
    const data = await res.json();
    this.setState({ recipes: data.hints });
  }

  render() {
    return (
      <div>
        {this.state.recipes.map((recipe: any) => (
          <Recipe key={recipe.food.id} recipe={recipe} />
        ))}
      </div>
    );
  }
}

export default RecipesContainer;
