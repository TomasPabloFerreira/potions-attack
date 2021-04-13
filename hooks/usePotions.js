import { useReducer } from 'react'
import { potionsReducer } from '../reducers'

const initialState = { red: 0, blue: 0, green: 0, yellow: 0, gray: 0 }

const percentages = {
	1: 3,
	2: 5,
	3: 10,
	4: 20,
	5: 25
}

const getAttacks = potions => {

	const totalPotions = Object.values(potions).reduce((acc, x) => acc + x, 0)
	if(!totalPotions) return []

	const nextAttack = Object.keys(potions).reduce(
		(acc, x) => potions[x]
			? (
				{
					percentage: percentages[acc.potions.length + 1],
					potions: [...acc.potions, x]
				}
			)
			: acc,
		{ percentage: 0, potions: []}
	)
	const result = (nextAttack.potions.length === 2)
		? {
			percentage: 3,
			potions: [nextAttack.potions[0]]
		}
		: nextAttack

	const newPoints = result.potions.reduce((acc, x) =>
		potionsReducer(acc, { type: 'remove', payload: { color: x } }),
		potions
	)
	return [result, ...getAttacks(newPoints)]
}

const usePotions = (customInitialState = initialState) => {

	const [potions, dispatchChange] = useReducer(potionsReducer, customInitialState)

	const subscribe = (type, color) => e => dispatchChange({
		type: type,
		payload: { color }
	})

	const getBestCombination = () => {
		const attacks = getAttacks(potions)
		const result = {
			total: attacks.reduce((acc, x) => acc + x.percentage, 0),
			attacks
		}
		return result
	}

	return { potions: potions, subscribe, getBestCombination }
}

export default usePotions
