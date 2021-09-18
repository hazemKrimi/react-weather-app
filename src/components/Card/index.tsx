import React from 'react';
import { Wrapper } from './styles';

interface Props {
	date: Date;
	data: string;
	icon: number;
	time: boolean;
	temp?: 'hot' | 'cold' | null;
	description?: string;
}

const Card: React.FC<Props> = ({ date, time, data, temp, icon, description }) => {
	const timeString: string = `${date.getHours() < 10 ? 0 : ''}${date.getHours()}:${
		date.getMinutes() < 10 ? 0 : ''
	}${date.getMinutes()}`;

	return (
		<Wrapper>
			<p>
				{date.toDateString().split(' ')[0]} {time ? timeString : ''}{' '}
				{(date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth()) +
					'/' +
					date.getDate()}
			</p>
			<h3>{data}</h3>
			<i className={`wi wi-owm-${icon} ${temp && temp}`}></i>
			<p>{description && description}</p>
		</Wrapper>
	);
};

export default Card;
