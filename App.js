import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { PotionCounter, Text, Button } from './components'

const potions = { red: 1, blue: 0, green: 0, yellow: 3, gray: 1 }


export default function App() {
	return (
		<LinearGradient
			colors={['#667eea', '#764ba2']}
			style={styles.background}
		>
			<Text style={styles.title}>Potions Attack</Text>

			<ScrollView style={styles.potionsList}>
				{Object.keys(potions).map(x => (
					<PotionCounter
						key={x}
						subscribe={() => () => {}}
						color={x}
						count={potions[x]}
					/>
				))}
			</ScrollView>

			<Button title="Get the best attack" onPress={() => {console.log('working')}} />

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
		paddingBottom: '30%'
	},
	title: {
		fontSize: 28,
		color: '#ddd'
	},
	potionsList: {
		width: '85%',
		marginVertical: 48,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 32,
	}
})
