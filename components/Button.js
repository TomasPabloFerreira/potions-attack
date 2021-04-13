import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from './'

const Button = ({ title, ...rest }) => {
	return(
		<TouchableOpacity style={styles.button} {...rest}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	)
}

export default Button

const styles = StyleSheet.create({
	button: {
		height: 50,
		width: '85%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#Ab3074',
		borderRadius: 32,
		borderWidth: 2,
		borderColor: '#4e0036'
	},
	buttonText: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16
	}
})