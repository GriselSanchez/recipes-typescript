import React from 'react';

interface Props {
  onSearchSubmit: any;
}

interface State {
  ingredients: string;
}

class SearchBar extends React.Component<Props, State> {
  state: Readonly<State> = {
    ingredients: 'apple',
  };

  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ingredients: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.ingredients);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder={this.state.ingredients}
          onChange={this.handleInput}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
