import React, { /* useState, */ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuthUser from 'globals/AuthUser';
import useCreateProject from 'hooks/mutations/useCreateProject';
import useRemoveProject from 'hooks/mutations/useRemoveProject';
//import useUpdateProject from 'hooks/mutations/useUpdateProject';

import DefaultLayout from 'components/Layouts/DefaultLayout/DefaultLayout';
import EntityListWrapper from 'components/entity/EntityListWrapper/EntityListWrapper';
import EntityCard from 'components/entity/EntityCard';
import Button from 'components/form/inputs/Button';
import { useApolloClient } from '@apollo/client';

const INITIAL_FORM_STATE = {
	name: 'New task',
	description: 'enter your text'
};

export default function Index() {
	const { user, isLoading } = useAuthUser();

	const client = useApolloClient();
	const navigate = useNavigate();
	const handleLogoutClick = async () => {
		localStorage.clear();
		await client.clearStore();
		navigate('/login');
	};

	const { create } = useCreateProject();
	const { remove } = useRemoveProject();
	//const { update } = useUpdateProject();

	const handleClick = async (event) => {
		event.preventDefault();

		await create(INITIAL_FORM_STATE.name, INITIAL_FORM_STATE.description);
	};

	useEffect(() => {
		if (isLoading === false && !user) {
			navigate('/login');
		}
	}, [user, isLoading]);

	return (
		<DefaultLayout title="Main Page">
			<Button onClick={handleLogoutClick}>Logout</Button>
			<Button onClick={handleClick}>Create project</Button>
			<EntityListWrapper>
				{user?.projects?.map((project) => (
					<EntityCard
						key={project.id}
						id={project.id}
						title="Project"
						name={project.name}
						description={project.description}
						onRemoveClick={remove}
						//onEditClick={update}
					/>
				))}
			</EntityListWrapper>
		</DefaultLayout>
	);
}
