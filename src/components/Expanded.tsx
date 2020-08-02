import React from 'react';

interface Props {
	credentials: any;
	foodID: string;
}

interface Nutrient {
	label: string;
	quantity: number;
	unit: string;
}

interface State {
	details: { ingredients: Ingredient[] };
	response: { totalNutrients: any; healthLabels: string[] };
	shouldShow: boolean;
}

interface Ingredient {
	quantity: number;
	measureURI: string;
	foodId: string;
}

export default class Expanded extends React.Component<Props, State> {
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
		response: { totalNutrients: {}, healthLabels: [] },
		shouldShow: false,
	};

	getDetails = async () => {
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
		const show = shouldShow ? 'Less' : 'More';
		let nutrition: any;

		if (totalNutrients) nutrition = Object.values(totalNutrients);

		return (
			<div>
				<button onClick={this.handleClick}>{`${show} Details`}</button>
				{shouldShow ? (
					<div>
						<ul>
							{healthLabels &&
								healthLabels.map((label: string) => (
									<li key={label}>{label}</li>
								))}
						</ul>
						<ul>
							{totalNutrients &&
								nutrition.map((elem: Nutrient) => (
									<li key={elem.label}>{`${
										elem.label
									}: ${elem.quantity.toFixed(2)}${
										elem.unit
									}`}</li>
								))}
						</ul>
					</div>
				) : null}
			</div>
		);
	}
}
