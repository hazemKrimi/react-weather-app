import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';

const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 0.7fr;
    align-items: center;
    padding: 0.5rem 0rem;

    h1 {
        cursor: pointer;
        justify-self: flex-start;
    }    
`;

const NavBar: React.FC = () => {
    const history = useHistory();

    return (
        <Nav>
            <h1 onClick={() => history.push('/home')}>Weather</h1>
            <SearchBar />
        </Nav>
    );
}

export default NavBar;