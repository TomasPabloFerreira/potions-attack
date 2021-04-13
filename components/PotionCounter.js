import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from '../components'

const PotionCounter = ({ color, count, subscribe }) => {

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={subscribe('remove', color)}
				className="removeButton"
			>
				<Text>Remove</Text>
			</TouchableOpacity>
			<View style={styles.countContainer}>
				<Text style={styles.count}>{count}</Text>
				<Text style={{color: color}}>{color}</Text>
			</View>
			<TouchableOpacity
				onPress={subscribe('add', color)}
				className="addButton"
			>
				<Text>Add</Text>
			</TouchableOpacity>
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