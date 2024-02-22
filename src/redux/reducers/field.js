const initialState = ['', '', '', '', '', '', '', '', ''];

export const field = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'MOVE':
			const { index, value } = payload;
			state[index] = value;
			return [...state];
		case 'RESET':
			state = ['', '', '', '', '', '', '', '', ''];
			return state;
		default:
			return state;
	}
};
