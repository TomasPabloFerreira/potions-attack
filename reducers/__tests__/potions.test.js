import reducer from '../potions'

describe('reducer: potions', () => {

	it('adds potions correctly', () => {
		const initialState = { red: 0, blue: 0, green: 0, yellow: 0, gray: 0 }
		let newState = reducer(initialState, { type: 'add', payload: { color: 'red' }})
		newState = reducer(newState, { type: 'add', payload: { color: 'blue' } })
		newState = reducer(newState, { type: 'add', payload: { color: 'red' } })

		expect(newState).toEqual({ red: 2, blue: 1, green: 0, yellow: 0, gray: 0 })
	})

	it('removes potions correctly', () => {
		const initialState = { red: 3, blue: 1, green: 0, yellow: 3, gray: 1 }
		let newState = reducer(initialState, { type: 'remove', payload: { color: 'red' }})
		newState = reducer(newState, { type: 'remove', payload: { color: 'blue' } })
		newState = reducer(newState, { type: 'remove', payload: { color: 'red' } })

		expect(newState).toEqual({ red: 1, blue: 0, green: 0, yellow: 3, gray: 1 })
	})
})

