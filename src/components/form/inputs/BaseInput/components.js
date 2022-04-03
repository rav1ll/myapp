import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
	border: unset;
	background: unset;
	outline: unset;
	width: 100%;
	font-size: 1em;
`;

export const Container = styled.div(({ $isError, $disabled }) => {
	return css`
		display: inline-flex;
		flex-direction: row;
		align-items: center;

		width: 100%;
		min-height: 45px;
		background-color: #ffefd5;

		padding: 0.2em;
		border: 3px solid ${$isError ? '#800000' : '#2f4f4f'};
		border-radius: 6px;

		${$disabled &&
		css`
			border-color: #ffefd5;
		`}
	`;
});

export const SlotContainer = styled.div`
	display: flex;
	align-items: center;
`;
