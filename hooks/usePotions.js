import { useReducer } from 'react'
import { potionsReducer } from '../reducers'

const initialState = { red: 0, blue: 0, green: 0, yellow: 0, gray: 0 }

const usePotions = (customInitialState = initialState) => {

	const [potions, dispatchChange] = useReducer(potionsReducer, customInitialState)

	const subscribe = (type, color) => e => dispatchChange({
		type: type,
		payload: { color }
	})

	const getBestCombination = () => {
		return potions
	}

	return { potions: potions, subscribe, getBestCombination }
}

export default usePotions
