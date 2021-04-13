import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from '.'

const CounterButton = ({ mode, ...rest }) => {
	return (
		<TouchableOpacity {...rest} style={styles.container}>
			<Text style={styles.text}>{mode === 'add' ? '+' : '-'}</Text>
		</TouchableOpacity>
	)
}

export default CounterButton

const styles = StyleSheet.create({
	container: {
		height: 32,
		width: 32,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#5b2084',
		borderRadius: 5,
		borderWidth: 2,
		borderColor: '#3b0054'
	},
	text: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16
	}
})