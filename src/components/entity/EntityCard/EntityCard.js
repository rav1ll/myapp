import React from 'react';

import TextField from 'components/form/formFields/TextField';
import Button from 'components/form/inputs/Button';

import { Wrapper, Header, Form, ButtonWrapper } from './components';

export default function EntityCard({ title, name, id, description, onRemoveClick, onUpdateClick }) {
	return (
		<Wrapper>
			<Header>
				{title}
				<ButtonWrapper>
					<Button className="btn update" onClick={() => onUpdateClick(id)}>
						Update
					</Button>
					<Button className="btn remove" onClick={() => onRemoveClick(id)}>
						Remove
					</Button>
				</ButtonWrapper>
			</Header>
			<Form>
				<TextField label="Project name" value={name} disabled />
				<TextField label="Project description" value={description} disabled />
			</Form>
		</Wrapper>
	);
}
