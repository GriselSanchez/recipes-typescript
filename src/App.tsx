import React from 'react';
import './App.css';
import RecipesContainer from './components/RecipesContainer';
import SearchBar from './components/SearchBar';
import { APP_ID, APP_KEY } from './private-config.json';
import { ThemeProvider } from 'react-jss';
import theme from './styles/theme';
import { Credential } from './util/Interfaces';

const myCredentials: Credential = { id: APP_ID, key: APP_KEY };

interface Props {}

interface State {
	ingredients: string;
	calories: string;
	health: string;
}
class App extends React.Component<Props, State> {
	state: Readonly<State> = {
		ingredients: 'apple',
		calories: '',
		health: '',
	};

	submitHandler = ({ ingredients, totalCalories, labels }: any) => {
		this.setState({
			ingredients: ingredients,
			calories: totalCalories,
			health: labels,
		});
	};

	render() {
		const { ingredients, calories, health } = this.state;
		return (
			<ThemeProvider theme={theme}>
				<div className='App'>
					<h1>Recipe App</h1>
					<SearchBar onSearchSubmit={this.submitHandler} />
					<RecipesContainer
						credentials={myCredentials}
						ingredients={ingredients}
						calories={calories}
						health={health}
					/>
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
