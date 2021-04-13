import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
	return (
		<LinearGradient
			colors={['#667eea', '#764ba2']}
			style={styles.background}
		>
			<Text>Potions Attack</Text>
			<StatusBar style="auto" />
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: '40%',
		paddingBottom: '20%'
	}
})
