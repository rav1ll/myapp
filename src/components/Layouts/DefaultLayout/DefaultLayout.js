import React from 'react';

import { Header, HeaderTitle, Content, MainBlock } from './components';

export default function DefaultLayout({ title, children }) {
	return (
		<Content>
			<Header>
				<HeaderTitle>{title}</HeaderTitle>
			</Header>
			<MainBlock>{children}</MainBlock>
		</Content>
	);
}
