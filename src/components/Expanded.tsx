import React from 'react';
import withStyles from 'react-jss';
import formatString from '../util/formatString';
import Bold from './Bold';
import { Credential, Nutrient, Ingredient, Meal } from '../util/Interfaces';

//TODO: refactor component

const styles = (theme: any) => ({
	...theme,
	container: {
		display: 'grid',
		justifyContent: 'center',
	},
	detailsContainer: {
		display: 'inline-grid',
		textAlign: 'left',
		gridTemplateColumns: 'repeat(4, 1fr)',
		gridGap: '10px 30px',
	},
});

const baseURL = 'https://api.edamam.com/api/food-database/v2/nutrients?';

interface Props {
	credentials: Credential;
	foodID: string;
	classes: any;
}

interface State {
	details: { ingredients: Ingredient[] };
	response: { totalNutrients: Meal[]; healthLabels: string[] };
	shouldShow: boolean;
}

class Expanded extends React.Component<Props, State> {
	state: Readonly<State> = {
		details: {
			ingredients: [
				{
					quantity: 1,
					measureURI:
						'http://www.edamam.com/ontologies/edamam.owl#Measure_serving',
					foodId: this.props.foodID,
				},
			],
		},
		response: { totalNutrients: [], healthLabels: [] },
		shouldShow: false,
	};

	getDetails = async () => {
		const req = await fetch(
			`${baseURL}app_id=${this.props.credentials.id}&app_key=${this.props.credentials.key}`,
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
		console.log(res);
		return res;
	};

	handleClick = async () => {
		const details = await this.getDetails();
		this.setState({
			response: {
				totalNutrients: details.totalNutrients,
				healthLabels: details.healthLabels,
			},
			shouldShow: !this.state.shouldShow,
		});
	};

	render() {
		const {
			response: { totalNutrients, healthLabels },
			shouldShow,
		} = this.state;
		const { classes } = this.props;
		const show = shouldShow ? 'Less' : 'More';
		let nutrition: any;

		if (totalNutrients) nutrition = Object.values(totalNutrients);

		return (
			<div>
				<button onClick={this.handleClick}>{`${show} Details`}</button>
				{shouldShow ? (
					<div className={classes.container}>
						<ul className={classes.detailsContainer}>
							{totalNutrients &&
								nutrition.map((elem: Nutrient) => (
									<li key={elem.label}>
										<Bold text={`${elem.label}: `} />
										{`${elem.quantity.toFixed(2)}${elem.unit}`}
									</li>
								))}
						</ul>
						<ul className={classes.detailsContainer}>
							{healthLabels &&
								healthLabels.map((label: string) => (
									<li key={label}>{formatString(label)}</li>
								))}
						</ul>
					</div>
				) : null}
			</div>
		);
	}
}

export default withStyles(styles)(Expanded);
