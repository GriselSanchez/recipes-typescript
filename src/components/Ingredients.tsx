import React, { Component, Fragment } from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';

const styles = (theme: any) => ({
	...theme,
	ingredientsInput: {
		height: 30,
		fontSize: 'medium',
	},
});

interface Props {
	onIngredientChange: any;
	classes: any;
}

class Ingredients extends Component<Props> {
	handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.props.onIngredientChange('ingredients', encodeURI(event.target.value));
	};

	render() {
		const { classes } = this.props;

		return (
			<Fragment>
				<input
					type='text'
					className={classNames(classes.input, classes.ingredientsInput)}
					placeholder='Search for ingredients or food'
					onChange={this.handleInput}
				/>
			</Fragment>
		);
	}
}

export default withStyles(styles)(Ingredients);
