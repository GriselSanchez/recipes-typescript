import React from 'react';
import Nutrients from './Nutrients';
import Expanded from './Expanded';
import { Credential, Meal } from '../util/Interfaces';

interface Props {
	recipe: Meal;
	credentials: Credential;
}

class Recipe extends React.Component<Props> {
	render() {
		const { label, category, image, nutrients, foodId } = this.props.recipe.food;

		return (
			<div>
				<h1>{label}</h1>
				<h3>{category}</h3>
				<img src={image} alt={label} />
				<Nutrients nutrients={nutrients} />
				<Expanded credentials={this.props.credentials} foodID={foodId} />
			</div>
		);
	}
}

export default Recipe;
