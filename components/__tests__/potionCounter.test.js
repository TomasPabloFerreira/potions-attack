import PotionCounter from '../PotionCounter'

describe('component: PotionCounter', () => {

	it('calls subscription function on remove button press', () => {
		const handlePress = jest.fn()
		const subscribe = (type, action) => () => handlePress(type, action)

		const wrapper = shallow(
			<PotionCounter subscribe={subscribe} color="red" />
		)
		wrapper
			.find('.removeButton')
			.simulate('press')

		expect(handlePress.mock.calls).toEqual([['remove', 'red']])
	})

	it('calls subscription function on add button press', () => {
		const handlePress = jest.fn()
		const subscribe = (type, action) => () => handlePress(type, action)

		const wrapper = shallow(
			<PotionCounter subscribe={subscribe} color="yellow" />
		)
		wrapper
			.find('.addButton')
			.simulate('press')

		expect(handlePress.mock.calls).toEqual([['add', 'yellow']])

	})
})
