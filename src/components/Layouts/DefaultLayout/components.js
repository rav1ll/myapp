import styled from 'styled-components';

export const Header = styled.header`
	position: sticky;
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	background-color: royalblue;
	border-radius: 22px;
	margin-top: 0.1em;
`;

export const HeaderTitle = styled.h1`
	font-size: 2.5rem;
	color: white;
`;

export const Content = styled.div`
	background-color: white;
`;

export const MainBlock = styled.main`
	display: flex;
	flex-direction: column;
	background-color: white;
	font-size: 1em;
`;
