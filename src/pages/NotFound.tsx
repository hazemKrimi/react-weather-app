import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 85vh;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const NotFound: React.FC = () => {
    return (
        <Wrapper>
            <h2>404 Page not found</h2>
        </Wrapper>
    );
}

export default NotFound;