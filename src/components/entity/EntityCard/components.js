import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: #bc8f8f;
	border-radius: 22px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #bc8f8f;
	padding: 0.1rem;
`;

export const ButtonWrapper = styled.div``;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	background-color: #ffdab9;
	align-content: center;

	> * {
		margin-bottom: 1rem;
		width: 18rem;
		align-content: center;
	}
`;
