const initialState = false;

export const draw = (state = initialState, action) => {
	const { type } = action;

	switch (type) {
		case 'DRAW':
			state = true;
			return state;
		case 'RESET':
			state = initialState;
			return state;
		default:
			return state;
	}
};
