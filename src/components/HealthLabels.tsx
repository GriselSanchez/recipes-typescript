import React from 'react';
import Checkbox from './Checkbox';
import withStyles from 'react-jss';

const styles = (theme: any) => ({
	...theme,
	checkboxContainer: {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		textAlign: 'left',
		gridGap: '10px 20px',
	},
});

interface State {
	labels: string[];
}

interface Props {
	onLabelChange: (type: string, value: string) => void;
	classes: any;
}

class HealthLabels extends React.Component<Props, State> {
	state: Readonly<State> = {
		labels: [],
	};

	handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
		let newLabels;
		const { labels } = this.state;
		const { value, checked } = event.target;

		checked
			? (newLabels = [...labels, value])
			: (newLabels = labels.filter(l => l !== value));

		this.setState({ labels: newLabels }, () =>
			this.props.onLabelChange('labels', this.state.labels.join('%'))
		);
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.checkboxContainer}>
				<Checkbox name='dairy-free' onLabelChange={this.handleCheckbox} />
				<Checkbox name='fish-free' onLabelChange={this.handleCheckbox} />
				<Checkbox name='gluten-free' onLabelChange={this.handleCheckbox} />
				<Checkbox name='kosher' onLabelChange={this.handleCheckbox} />
				<Checkbox name='low-sugar' onLabelChange={this.handleCheckbox} />
				<Checkbox name='paleo' onLabelChange={this.handleCheckbox} />
				<Checkbox name='peanut-free' onLabelChange={this.handleCheckbox} />
				<Checkbox name='pecatarian' onLabelChange={this.handleCheckbox} />
				<Checkbox name='vegetarian' onLabelChange={this.handleCheckbox} />
				<Checkbox name='vegan' onLabelChange={this.handleCheckbox} />
				<Checkbox name='soy-free' onLabelChange={this.handleCheckbox} />
			</div>
		);
	}
}

export default withStyles(styles)(HealthLabels);
