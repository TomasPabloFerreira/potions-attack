const reducer = (state, action) => {
	const color = action.payload.color
	switch (action.type) {
		case 'add':
			return {
					...state,
					[color]: state[color] + 1
			}
		case 'remove':
			return state[color] > 0
				? {
					...state,
					[color]: state[color] - 1
				}
				: state
		default: return state
	}
}

export default reducer
