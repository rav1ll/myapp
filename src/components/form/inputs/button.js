import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button(
	({ disabled }) => css`
		border: 3px solid #4169e1;
		border-radius: 22px;
		font-size: 1.4rem;
		margin: 10px;
		display: flex;
		color: white;
		background-color: #1e90ff;
		cursor: ${disabled ? 'not-allowed' : 'pointer'};
		opacity: ${disabled ? 0.5 : 1};
		box-shadow: 0 0 5px #00fa9a;
	`
);

export default function Button({ className, children, onClick, type = 'button', disabled }) {
	return (
		<StyledButton className={className} onClick={onClick} type={type} disabled={disabled}>
			{children}
		</StyledButton>
	);
}
