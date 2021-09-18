import styled from 'styled-components';

export const Wrapper = styled.div`
	min-height: 85vh;
	padding: 2rem 0rem;
	display: grid;
	row-gap: 3rem;

	h2 {
		text-align: center;
	}

	.main,
	.wind,
	.humidity {
		display: grid;
		justify-content: center;
	}

	.slider {
		display: grid;
		grid-template-columns: auto 1fr auto;
		justify-content: center;
		align-items: center;

		.slider-background {
			width: 100%;
			overflow: hidden;
		}

		img {
			cursor: pointer;
			width: 4rem;
			height: 4rem;
		}
	}

	.forecast-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, 10rem);
		grid-auto-flow: column;
		column-gap: 2rem;
		justify-content: center;
	}

	.error {
		display: grid;
		justify-content: center;
		align-items: center;

		h2 {
			text-align: center;
			word-break: break-word;
		}
	}
`;
