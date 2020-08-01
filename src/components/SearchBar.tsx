import React from 'react';
import withStyles from 'react-jss';

//Components
import Calories from './Calories';
import HealthLabels from './HealthLabels';
import Ingredients from './Ingredients';

const styles = (theme: any) => ({
  ...theme,
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});
interface Props {
  onSearchSubmit: any;
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
    console.log(this);

    const { classes } = this.props;
    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <Ingredients onIngredientChange={this.handleInput} />
        <Calories onCalorieChange={this.handleInput} />
        <HealthLabels onLabelChange={this.handleInput} />
        <button className={classes.button} type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default withStyles(styles)(SearchBar);
