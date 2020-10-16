import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Input = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 0.25rem 0.5rem;
    justify-self: flex-end;
    width: 100%;

    &::placeholder {
        color: rgba(0, 0, 0, 0.5);
    }
`;

const SearchBar: React.FC = () => {
    const [ query, setQuery ] = useState<string>('');
    const history = useHistory();

    const search = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            history.push(`/search/${query}`);
            setQuery('');
        }
    }

    return (
        <Input
            placeholder='Search'
            onKeyPress={search}
            onChange={event => setQuery(event.target.value)}
        />
    );
}

export default SearchBar;