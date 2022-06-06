import React, { /* useState, */ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuthUser from 'globals/AuthUser';
import useCreateProject from 'hooks/mutations/useCreateProject';
import useRemoveProject from 'hooks/mutations/useRemoveProject';

import useUpdateProject from 'hooks/mutations/useUpdateProject';

import CreateEntity from 'components/entity/CreateEntity/CreateEntity';

import { useApolloClient } from '@apollo/client';
import DefaultLayout from 'components/Layouts/DefaultLayout/DefaultLayout';
import EntityListWrapper from 'components/entity/EntityListWrapper/EntityListWrapper';
import EntityCard from 'components/entity/EntityCard/EntityCard';

export default function Main() {
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
	const { update } = useUpdateProject();

	useEffect(() => {
		if (isLoading === false && !user) {
			navigate('/login');
		}
	}, [user, isLoading]);

	return (
		<DefaultLayout title="Task Tracker">
			<CreateEntity entity="project" handleLogoutClick={handleLogoutClick} createRequest={create} />

			<EntityListWrapper>
				{user?.projects?.map(({ id, name, description }) => (
					<EntityCard
						key={id}
						id={id}
						title="Project"
						name={name}
						description={description}
						onRemoveClick={remove}
						onUpdateClick={update}
					/>
				))}
			</EntityListWrapper>
		</DefaultLayout>
	);
}
