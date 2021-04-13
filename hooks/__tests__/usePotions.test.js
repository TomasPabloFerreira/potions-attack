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
})
