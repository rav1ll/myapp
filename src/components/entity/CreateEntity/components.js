import styled, { css } from 'styled-components';
import Button from 'components/form/inputs/button';

export const Wrapper = styled.div(
	() => css`
		display: flex;
		flex-direction: column;
		padding: 1rem;
		margin-bottom: 1em;
		background-color: white;
	`
);

export const CreateBlock = styled.div`
	display: flex;
	flex-direction: row;
	background-color: royalblue;
	max-width: 33rem;
	padding: 0.7rem;
	border-radius: 1rem;
	color: white;
`;

export const Title = styled.div`
	margin-right: 3em;
	margin-bottom: 3em;
	font-size: 22px;
	align-items: center;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: start;

	> :nth-child(n):not(:last-child) {
		margin-right: 0.4rem;
		margin-bottom: 0.3rem;
	}
`;

export const StyledButton = styled(Button)`
	max-height: 28px;
	max-width: 3em;
`;
