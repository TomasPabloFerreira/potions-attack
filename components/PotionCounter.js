import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from '../components'

const PotionCounter = ({ color, subscribe }) => {

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={subscribe('remove', color)}
				className="removeButton"
			>
				<Text>Remove</Text>
			</TouchableOpacity>
			<Text>{color}</Text>
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
		height: 100,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	}
})