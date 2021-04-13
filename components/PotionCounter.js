import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from './Text'
import CounterButton from './CounterButton'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PotionCounter = ({ color, count, subscribe }) => {

	return (
		<View style={styles.container}>
			<CounterButton
				mode="remove" 
				onPress={subscribe('remove', color)}
				className="removeButton"
			/>
			<View style={styles.countContainer}>
				<Text style={styles.count}>{count} x</Text>
				<MaterialCommunityIcons name="bottle-tonic-skull" size={42} color={color} />
			</View>
			<CounterButton
				mode="add"
				onPress={subscribe('add', color)}
				className="addButton"
			/>
		</View>
	)
}

export default PotionCounter

const styles = StyleSheet.create({
	container: {
		height: 80,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	countContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-end'
	},
	count: {
		marginRight: -2,
		marginBottom: 2,
		fontSize: 18
	}
})