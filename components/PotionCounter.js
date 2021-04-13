import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, CounterButton } from '../components'

const PotionCounter = ({ color, count, subscribe }) => {

	return (
		<View style={styles.container}>
			<CounterButton
				mode="remove" 
				onPress={subscribe('remove', color)}
				className="removeButton"
			/>
			<View style={styles.countContainer}>
				<Text style={styles.count}>{count}</Text>
				<Text style={{color: color}}>{color}</Text>
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
		flexDirection: 'row'
	},
	count: {
		marginRight: 8
	}
})