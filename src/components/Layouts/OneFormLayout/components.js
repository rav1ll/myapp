import styled from 'styled-components';

export const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Form = styled.form`
	font-size: 1.5em;
	margin-top: 20vh;
	max-width: 15em;
	min-width: 10em;
	background-color: #ffebcd;
	border: 5rem solid #ffebcd;
	border-radius: 1rem;

	> * {
		margin-bottom: 0.5em;
	}
`;
