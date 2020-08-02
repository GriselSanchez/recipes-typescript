import React from 'react';
import Bold from './Bold';

const Nutrients = (props: { nutrients: any }) => {
	const cleanNutrients = (nutrients: any) => {
		let clean: any = {};
		const keys = Object.keys(nutrients);
		for (let k of keys) clean[k] = nutrients[k].toFixed(2);
		return clean;
	};

	const { ENERC_KCAL, PROCNT, FAT, CHOCDF, FIBTG } = cleanNutrients(props.nutrients);

	return (
		<div>
			<p>
				<Bold text='Calories: ' />
				{ENERC_KCAL}
			</p>
			<p>
				<Bold text='Proteins: ' />
				{PROCNT}
			</p>
			<p>
				<Bold text='Fat: ' />
				{FAT}
			</p>
			<p>
				<Bold text='Carbs: ' />
				{CHOCDF}
			</p>
			<p>
				<Bold text='Fiber: ' />
				{FIBTG}
			</p>
		</div>
	);
};

export default Nutrients;
