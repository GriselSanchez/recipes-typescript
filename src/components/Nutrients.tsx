import React from 'react';
import Bold from './Bold';
import { MainNutrients } from '../util/Interfaces';

interface Props {
	nutrients: MainNutrients;
}

const Nutrients: React.FC<Props> = ({ nutrients }: Props) => {
	const cleanNutrients = (nutrients: MainNutrients) => {
		let clean: { [key: string]: string } = {};
		const keys = Object.keys(nutrients);

		for (let k of keys) clean[k] = nutrients[k].toFixed(2);
		return clean;
	};

	const { ENERC_KCAL, PROCNT, FAT, CHOCDF, FIBTG } = cleanNutrients(nutrients);

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
