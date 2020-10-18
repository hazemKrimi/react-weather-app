import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
    display: grid;
    grid-template-rows: auto;
    row-gap: 0.5rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    margin: 1rem 0rem;

    i {
        font-size: 5rem;
    }

    .cold {
        color: #429BB8;
    }

    .hot {
        color: #FF4500;
    }
`;

interface Props {
    date: Date,
    data: string,
    icon: number,
    time: boolean,
    temp?: 'hot' | 'cold' | null,
    description?: string
};

const Card: React.FC<Props> = ({ date, time, data, temp, icon, description }) => {
    const timeString: string = `${date.getHours() < 10 ? 0 : ''}${date.getHours()}:${date.getMinutes() < 10 ? 0 : ''}${date.getMinutes()}`;

    return (
        <Wrapper>
            <p>{time ? timeString : ''} {date.toDateString().split(' ')[0]} {date.getDate() + '/' + (date.getMonth() + 1)}</p>
            <h3>{data}</h3>
            <i className={`wi wi-owm-${icon} ${temp && temp}`} ></i>
            <p>{description && description}</p>
        </Wrapper>
    );
}

export default Card;