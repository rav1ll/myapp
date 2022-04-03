import React from 'react';

import { StyledButton } from './components';

export default function VisibilityButton({ isHidden, ...props }) {
	return (
		<StyledButton type="button" {...props}>
			{isHidden ? 'show' : 'hide'}
		</StyledButton>
	);
}
