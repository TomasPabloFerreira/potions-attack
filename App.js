import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { PotionCounter, Text } from './components'

export default function App() {
	return (
		<LinearGradient
			colors={['#667eea', '#764ba2']}
			style={styles.background}
		>
			<Text style={styles.title}>Potions Attack</Text>

			<ScrollView style={styles.potionsList}>
				<PotionCounter subscribe={() => () => {}} color="red" />
			</ScrollView>

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
	},
	title: {
		fontSize: 28,
		color: '#ddd'
	},
	potionsList: {
		margin: 32,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 32,
	}
})
