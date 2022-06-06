import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
	border: unset;
	background: unset;
	outline: unset;
	width: 100%;
	font-size: 1.7rem;
`;

export const Container = styled.div(({ $isError, $disabled }) => {
	return css`
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		min-height: 45px;
		background-color: #f5f5f5;

		padding: 0.2rem;
		border: 3px solid ${$isError ? '#800000' : '#F4A460'};
		border-radius: 6px;

		${$disabled &&
		css`
			border-color: #4169e1;
		`}
	`;
});

export const SlotContainer = styled.div`
	display: flex;
	align-items: center;
`;
