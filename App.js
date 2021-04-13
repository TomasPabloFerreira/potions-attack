import { StatusBar } from 'expo-status-bar'
import React, { useState, useMemo } from 'react'
import { StyleSheet, ScrollView, Modal } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { PotionCounter, Text, Button, BestCombinationModal } from './components'
import { usePotions } from './hooks'

export default function App() {

	const [modalVisible, setModalVisible] = useState(false)
	const { potions, subscribe, getBestCombination } = usePotions()

	const bestCombination = useMemo(() => getBestCombination(), [potions])


	const handlePress = () => {
		setModalVisible(true)
	}

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
						subscribe={subscribe}
						color={x}
						count={potions[x]}
					/>
				))}
			</ScrollView>

			<Button title="Get the best attack" onPress={handlePress} />

			<BestCombinationModal
				visible={modalVisible}
				bestCombination={bestCombination}
				handleRequestClose={() => setModalVisible(false)}
			/>

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
