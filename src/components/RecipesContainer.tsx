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
    if (prevProps !== this.props) this.getRecipes();
  }

  async getRecipes() {
    const query = this.getQuery();
    const res = await fetch(query);
    const data = await res.json();
    this.setState({ recipes: data.hints });
  }

  getQuery = () => {
    const { calories, health, ingredients } = this.props;
    let query = `${baseURL}ingr=${ingredients}`;

    if (calories) query = `${query}&calories=${calories}`;
    if (health) query = `${query}&health=${health}`;

    return `${query}&app_id=${this.props.credentials.id}&app_key=${this.props.credentials.key}`
  }

  render() {
    return (
      <div>
        {this.state.recipes.map((recipe: any) => (
          <Recipe
            key={recipe.food.foodId}
            recipe={recipe}
            credentials={this.props.credentials}
          />
        )
        )}
      </div>
    );
  }
}

export default RecipesContainer;
