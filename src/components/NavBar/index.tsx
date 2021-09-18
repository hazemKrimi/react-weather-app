import React from 'react';
import { Wrapper } from './styles';
import { useHistory } from 'react-router-dom';
import SearchBar from '../SearchBar';

const NavBar: React.FC = () => {
	const history = useHistory();

	return (
		<Wrapper>
			<h1 onClick={() => history.push('/home')}>Weather</h1>
			<SearchBar />
		</Wrapper>
	);
};

export default NavBar;
