import styled, { css } from 'styled-components';

export const Container = styled.div(({ $mt = 0 }) => {
	return css`
		color: #800000;
		font-size: 0.7em;
		margin-top: ${$mt}em;
	`;
});
