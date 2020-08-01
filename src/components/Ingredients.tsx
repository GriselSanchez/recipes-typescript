import React, { Component } from 'react';

interface Props {
    onIngredientChange: any;
}

interface State {
    ingredients: string
}


export default class Ingredients extends Component<Props, State> {
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
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search for ingredients or food"
                    onChange={this.handleInput}
                />
            </div>
        );
    }
}
