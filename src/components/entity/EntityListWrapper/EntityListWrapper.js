import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div(
	() => css`
		display: flex;
		flex-wrap: wrap;
		margin-left: 30px;

		> :nth-child(n) {
			margin: 0.35rem;
			width: 20rem;
		}
	`
);

export default function EntityListWrapper({ children }) {
	return <Wrapper>{children}</Wrapper>;
}
