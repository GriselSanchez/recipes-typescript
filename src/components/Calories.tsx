import React from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';

const styles = (theme: any) => ({
  ...theme,
  caloriesContainer: {
    display: 'flex',
    width: '50%'
  },
  caloriesInput: {
    width: '50%'
  }
});

interface Props {
  onCalorieChange: any;
  classes: any;
}

interface State {
  minCalories: string;
  maxCalories: string;
  total: string;
}

class Calories extends React.Component<Props, State> {
  state: Readonly<State> = {
    minCalories: '',
    maxCalories: '',
    total: ''
  };

  handleCalories = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = event;
    // @ts-ignore
    this.setState({ [name]: value }, this.sendTotalCalories);
  }

  getTotalCalories = () => {
    const { minCalories, maxCalories } = this.state;

    if (minCalories && maxCalories) return `${minCalories}-${maxCalories}`;
    else if (!maxCalories) return `${minCalories}%2B`;
    else return maxCalories;
  };

  sendTotalCalories = () => {
    this.setState(
      { total: this.getTotalCalories() },
      () => this.props.onCalorieChange('totalCalories', this.state.total)
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.caloriesContainer}>
        <input
          type="number"
          className={classNames(classes.input, classes.caloriesInput)}
          name="minCalories"
          placeholder="Min Calories"
          onInput={this.handleCalories}
        ></input>
        <input
          type="number"
          className={classNames(classes.input, classes.caloriesInput)}
          name="maxCalories"
          placeholder="Max Calories"
          onInput={this.handleCalories}
        ></input>
      </div>
    );
  }
}

export default withStyles(styles)(Calories);
