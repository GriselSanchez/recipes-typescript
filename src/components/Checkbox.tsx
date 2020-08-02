import React from 'react';
import withStyles from 'react-jss';
import formatString from '../util/formatString';

const styles = (theme: any) => ({
	...theme,
	container: {
		display: 'grid',
		gridAutoFlow: 'column',
		columnGap: '20px',
	},
	checkbox: {
		marginLeft: 'auto',
	},
});

function Checkbox({ name, onLabelChange, classes }: any) {
	return (
		<label htmlFor={name} className={classes.container}>
			{formatString(name)}
			<input
				type='checkbox'
				value={name}
				name={name}
				className={classes.checkbox}
				onChange={onLabelChange}
			/>
		</label>
	);
}

export default withStyles(styles)(Checkbox);
