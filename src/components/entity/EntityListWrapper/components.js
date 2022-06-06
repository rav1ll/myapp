import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
	() => css`
		display: flex;
		flex-wrap: wrap;
		margin-left: 1rem;
		background-color: white;

		> :nth-child(n) {
			margin: 0.35rem;
			width: 20rem;
		}
	`
);
