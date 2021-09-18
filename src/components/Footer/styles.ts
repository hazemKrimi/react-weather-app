import styled from 'styled-components';

export const Wrapper = styled.div`
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
