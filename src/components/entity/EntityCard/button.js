import Button from 'components/form/inputs/button';

export const ButtonInEditMode = ({ onAcceptClick, onDiscardClick, isDisableAccept }) => (
	<>
		<Button
			disabled={isDisableAccept}
			onClick={(event) => {
				onAcceptClick(event);
			}}
		>
			Accept
		</Button>
		<Button onClick={onDiscardClick}>Discard</Button>
	</>
);

export const ButtonInShowMode = ({ editClick, removeClick }) => (
	<>
		<Button onClick={editClick}>Edit</Button>
		<Button onClick={removeClick}>Remove</Button>
	</>
);
