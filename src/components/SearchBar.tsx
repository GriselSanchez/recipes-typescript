import React from 'react';
import withStyles from 'react-jss';

//Components
import Calories from './Calories';
import HealthLabels from './HealthLabels';
import Ingredients from './Ingredients';

const styles = (theme: any) => ({
	...theme,
	container: {
		display: 'grid',
		justifyContent: 'center',
		gridGap: 15,
	},
});
interface Props {
	onSearchSubmit: (state: State) => void;
	classes: any;
}

interface State {
	ingredients: string;
	totalCalories: string;
	labels: string;
}

class SearchBar extends React.Component<Props, State> {
	state: Readonly<State> = {
		ingredients: 'apple',
		totalCalories: '',
		labels: '',
	};

	handleInput = (field: string, value: string) => {
		// @ts-ignore
		this.setState({ [field]: value });
	};

	handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		this.props.onSearchSubmit(this.state);
	};

	render() {
		const { classes } = this.props;
		return (
			<form className={classes.container} onSubmit={this.handleSubmit}>
				<Ingredients onIngredientChange={this.handleInput} />
				<Calories onCalorieChange={this.handleInput} />
				<HealthLabels onLabelChange={this.handleInput} />
				<button className={classes.button} type='submit'>
					Search
				</button>
			</form>
		);
	}
}

export default withStyles(styles)(SearchBar);
