const initialState = 'X';

export const currentPlayer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'PLAYER_MOVE':
			state = payload;
			return state;
		case 'RESET':
			state = initialState;
			return state;
		default:
			return state;
	}
};
