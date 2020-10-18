import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import SearchIcon from '../assets/search.svg';

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    justify-self: flex-end;
    padding: 0.2rem 0.5rem;
`;

const Input = styled.input`
    border: none;
    border-radius: 5px;

    &::placeholder {
        color: rgba(0, 0, 0, 0.5);
    }
`;

const SearchBar: React.FC = () => {
    const [ query, setQuery ] = useState<string>('');
    const history = useHistory();

    const search = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && query !== '') {
            history.push(`/search/${query}`);
            setQuery('');
        }
    }

    return (
        <Wrapper>
            <Input
                placeholder='Search'
                value={query}
                onKeyPress={search}
                onChange={event => setQuery(event.target.value)}
            />
            <img
                src={SearchIcon}
                alt='Search icon'
            />
        </Wrapper>
    );
}

export default SearchBar;