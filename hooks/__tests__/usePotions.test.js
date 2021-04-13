import { usePotions } from '../'
import { View, TouchableOpacity } from 'react-native'

const Test = ({ hook }) => <View {...hook()}></View>

describe('custom hook: usePotions', () => {

	it('subscribes to add event', () => {
		const wrapper = shallow(<Test hook={usePotions} />)
		const { subscribe } = wrapper.props()
		shallow(
			<TouchableOpacity onPress={subscribe('add', 'red')} />
		).simulate('press')
		const { potions } = wrapper.find('View').props()
		expect(potions.red).toEqual(1)
	})
	it('subscribes to remove event', () => {
		const initialState = { red: 0, blue: 0, green: 3, yellow: 2, gray: 0 }
		const wrapper = shallow(<Test hook={() => usePotions(initialState)} />)
		const { subscribe } = wrapper.props()
		shallow(
			<TouchableOpacity onPress={subscribe('remove', 'green')} />
		).simulate('press').simulate('press')
		const { potions } = wrapper.find('View').props()
		expect(potions.green).toEqual(1)
		expect(potions.yellow).toEqual(2)
	})
	it('gets the best attack correctly (case 1)', () => {
		const initialState = { red: 2, blue: 1, green: 1, yellow: 0, gray: 0 }
		const wrapper = shallow(<Test hook={() => usePotions(initialState)} />)
		const { getBestCombination } = wrapper.props()
		const result = getBestCombination()
		expect(result).toEqual({
			total: 13,
			attacks: [
				{ percentage: 10, potions: ['red', 'blue', 'green'] },
				{ percentage: 3, potions: ['red'] },
			]
		})
	})
	it('gets the best attack correctly (case 2)', () => {
		const initialState = { red: 2, blue: 2, green: 1, yellow: 1, gray: 1 }
		const wrapper = shallow(<Test hook={() => usePotions(initialState)} />)
		const { getBestCombination } = wrapper.props()
		const result = getBestCombination()
		expect(result).toEqual({
			total: 31,
			attacks: [
				{ percentage: 25, potions: ['red', 'blue', 'green', 'yellow', 'gray'] },
				{ percentage: 3, potions: ['red'] },
				{ percentage: 3, potions: ['blue'] }
			]
		})
	})
	it('gets the best attack correctly (case 3)', () => {
		const initialState = { red: 2, blue: 2, green: 2, yellow: 1, gray: 1 }
		const wrapper = shallow(<Test hook={() => usePotions(initialState)} />)
		const { getBestCombination } = wrapper.props()
		const result = getBestCombination()
		expect(result).toEqual({
			total: 35,
			attacks: [
				{ percentage: 25, potions: ['red', 'blue', 'green', 'yellow', 'gray'] },
				{ percentage: 10, potions: ['red', 'blue', 'green'] },
			]
		})
	})
})
