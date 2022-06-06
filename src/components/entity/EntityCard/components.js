import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 1rem;
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	background-color: royalblue;
	padding: 0.6rem;
	border-top-left-radius: 1rem;
	border-top-right-radius: 1rem;
	color: white;
	font-size: 1.5rem;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	> :nth-child(n):not(:last-child) {
		margin-right: 1rem;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	border: 3px solid #4169e1;
	background-color: lightskyblue;
	border-bottom-left-radius: 1rem;
	border-bottom-right-radius: 1rem;
	> * {
		margin-bottom: 0.6rem;
	}
`;
