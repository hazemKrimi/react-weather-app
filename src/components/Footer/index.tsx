import React from 'react';
import { Wrapper } from './styles';
import TW from '../../assets/twitter.svg';
import GH from '../../assets/github.svg';
import LI from '../../assets/linkedin.svg';

const Footer: React.FC = () => {
	return (
		<Wrapper>
			<p>
				<a href='https://hazemkrimi.tech' target='_blank' rel='noopener noreferrer'>
					Hazem Krimi
				</a>{' '}
				&copy; {new Date().getFullYear()}
			</p>
			<div className='contact'>
				<a href='https://github.com/hazemKrimi' target='_blank' rel='noopener noreferrer'>
					<img src={GH} alt='Github' />
				</a>
				<a href='https://twitter.com/HazemKrimi' target='_blank' rel='noopener noreferrer'>
					<img src={TW} alt='Twitter' />
				</a>
				<a href='https://www.linkedin.com/in/hazemkrimi/' target='_blank' rel='noopener noreferrer'>
					<img src={LI} alt='LinkedIn' />
				</a>
			</div>
		</Wrapper>
	);
};

export default Footer;
