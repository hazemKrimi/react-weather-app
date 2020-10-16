import React from 'react';
import styled from 'styled-components';
import FB from '../assets/facebook.svg';
import GH from '../assets/github.svg';
import LI from '../assets/linkedin.svg';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 0.7fr;
    align-items: center;
    padding: 0.5rem 0rem;

    p {
        justify-self: flex-start;
    }

    .contact {
        display: grid;
        grid-template-columns: repeat(3, 24px);
        column-gap: 0.25rem;
        align-items: center;
        justify-content: flex-end;

        img {
            width: 24px;
            height: 24px;
        }
    }
`;

const Footer: React.FC = () => {
    return (
        <Wrapper>
            <p>Hazem Krimi &copy; {new Date().getFullYear()}</p>
            <div className='contact'>
                <a href='https://www.facebook.com/krimi.hazem/' target='_blank' rel='noopener noreferrer'>
                    <img src={FB} alt='Facebook' />
                </a>
                <a href='https://github.com/hazemKrimi' target='_blank' rel='noopener noreferrer'>
                    <img src={GH} alt='Github' />
                </a>
                <a href='https://www.linkedin.com/in/hazemkrimi/' target='_blank' rel='noopener noreferrer'>
                    <img src={LI} alt='LinkedIn' />
                </a>
            </div>
        </Wrapper>
    );
}

export default Footer;