import React from 'react';
import Nutrients from './Nutrients';
import Expanded from './Expanded';
interface State {
  details: any;
  response: any;
}

interface Props {
  recipe: any;
  credentials: any;
}

class Recipe extends React.Component<Props, State> {
  state: State = {
    details: {
      ingredients: [
        {
          quantity: 1,
          measureURI:
            'http://www.edamam.com/ontologies/edamam.owl#Measure_serving',
          foodId: this.props.recipe.food.foodId,
        },
      ],
    },
    response: {},
  };

  handleDetailsReq = async () => {
    const req = await fetch(
      `https://api.edamam.com/api/food-database/v2/nutrients?app_id=${this.props.credentials.id}&app_key=${this.props.credentials.key}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.details),
      }
    );
    const res = await req.json();
    this.setState({ response: res });
    console.log(this.state.response);
  };

  render() {
    const { label, category, image, nutrients } = this.props.recipe.food;
    return (
      <div onClick={this.handleDetailsReq}>
        <h1>{label}</h1>
        <h3>{category}</h3>
        <img src={image} alt={label} />
        <Nutrients nutrients={nutrients} />
        <Expanded details={this.state.response} />
      </div>
    );
  }
}

export default Recipe;
