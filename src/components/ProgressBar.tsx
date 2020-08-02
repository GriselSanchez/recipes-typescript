import React, { Component } from 'react';
import withStyles from 'react-jss';

const styles = (theme: any) => ({
	...theme,
	wrapper: {
		width: 400,
		height: 15,
		backgroundColor: 'grey',
		display: 'inline-block',
	},
	cal: {
		fontWeight: '700',
	},
	progress: {
		'&:before': {
			content: '""',
			width: '20%',
			height: '100%',
			backgroundColor: 'green',
			display: 'inline-block',
		},
	},
});

interface Props {
	classes: any;
	calories: any;
}

class ProgressBar extends Component<Props> {
	render() {
		const { classes, calories } = this.props;
		return (
			<div>
				<span className={classes.cal}>{calories}</span>
				<div className={classes.wrapper}>
					<div className={classes.progress}></div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(ProgressBar);
