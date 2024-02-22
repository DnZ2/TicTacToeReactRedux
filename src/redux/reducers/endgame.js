const initialState = false;

export const endgame = (state = initialState, action) => {
	const { type } = action;

	switch (type) {
		case 'ENDGAME':
			state = true;
			return state;
		case 'RESET':
			state = initialState;
			return state;
		default:
			return state;
	}
};
