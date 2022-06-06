import React, { useState } from 'react';

import useHandleChangeField from 'components/form/inputs/useHandleChangeField';
import TextField from 'components/form/formFields/TextField';

import { Wrapper, CreateBlock, Title, Form, StyledButton } from './components';

const INITIAL_FORM_STATE = { name: '', description: '' };

export default function CreateEntityBlock({ handleLogoutClick, createRequest }) {
	const [formState, setFormState] = useState(INITIAL_FORM_STATE);
	const handleEvents = useHandleChangeField(setFormState);

	const handleCreateClick = async (event) => {
		event.preventDefault();
		await createRequest(formState.name, formState.description);
		setFormState(INITIAL_FORM_STATE);
	};

	return (
		<Wrapper>
			<CreateBlock>
				<Form>
					<Title>Create new project</Title>
					<TextField id="name" label="Name" value={formState.name} onChange={handleEvents} required></TextField>
					<TextField id="description" label="Description" value={formState.description} onChange={handleEvents}></TextField>
					<StyledButton type="submit" onClick={(event) => handleCreateClick(event)} disabled={formState.name.trim() === ''}>
						Create
					</StyledButton>
					<StyledButton onClick={handleLogoutClick}>Logout</StyledButton>
				</Form>
			</CreateBlock>
		</Wrapper>
	);
}
