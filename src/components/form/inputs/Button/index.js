import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button(
	({ disabled }) => css`
		border: 3px solid #ffefd5;
		border-radius: 22px;
		font-size: 1.1em;
		margin: 10px;
		display: flex;
		color: #2f4f4f;
		background-color: #ffefd5;
		cursor: ${disabled ? 'not-allowed' : 'pointer'};
		opacity: ${disabled ? 0.5 : 1};
		box-shadow: 0 0 5px #708090;
	`
);

export default function Button({ className, children, onClick, type = 'button', disabled }) {
	return (
		<StyledButton className={className} onClick={onClick} type={type} disabled={disabled}>
			{children}
		</StyledButton>
	);
}
