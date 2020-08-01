import React, { Component, Fragment } from 'react';
import withStyles from 'react-jss';

const styles = (theme: any) => ({
    ...theme,
});

interface Props {
    onIngredientChange: any;
    classes: any;
}

interface State {
    ingredients: string
}

class Ingredients extends Component<Props, State> {
    state: Readonly<State> = {
        ingredients: '',
    };

    handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(
            { ingredients: encodeURI(event.target.value) },
            () => this.props.onIngredientChange('ingredients', this.state.ingredients)
        );
    };

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <input
                    type="text"
                    className={classes.input}
                    placeholder="Search for ingredients or food"
                    onChange={this.handleInput}
                />
            </Fragment >
        );
    }
}

export default withStyles(styles)(Ingredients)
