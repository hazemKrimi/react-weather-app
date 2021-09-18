import React, { useState } from 'react';
import { Wrapper, Input } from './styles';
import { useHistory } from 'react-router-dom';
import SearchIcon from '../../assets/search.svg';

const SearchBar: React.FC = () => {
	const [query, setQuery] = useState<string>('');
	const history = useHistory();

	const search = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && query !== '') {
			history.push(`/search/${query}`);
			setQuery('');
		}
	};

	return (
		<Wrapper>
			<Input
				placeholder='Search'
				value={query}
				onKeyPress={search}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
			/>
			<img src={SearchIcon} alt='Search icon' />
		</Wrapper>
	);
};

export default SearchBar;
