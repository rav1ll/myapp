import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div(
	() => css`
		display: flex;
		flex-wrap: wrap;

		justify-content: start;
		margin-left: 30px;

		> :nth-child(n) {
			margin-top: 10px;
			margin-bottom: 10px;
			margin-right: 10px;
			width: 20rem;
		}
	`
);

export default function EntityListWrapper({ children }) {
	return <Wrapper>{children}</Wrapper>;
}
