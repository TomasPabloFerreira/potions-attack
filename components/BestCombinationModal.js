import React from 'react'
import { Modal, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from '.'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BestCombinationModal = ({ visible, bestCombination, handleRequestClose }) => {
	console.log(bestCombination)
	
	return(
		<Modal
			visible={visible}
			animationType="fade"
			transparent={true}
			onRequestClose={handleRequestClose}
			onBack
		>
			<View style={styles.center}>
				<View style={styles.modalView}>

					<View style={styles.row}>
						<View style={styles.potionsCell}>
							<Text>Potions</Text>
						</View>
						<Text style={styles.percentageText}>Percentage</Text>
					</View>

					{bestCombination.attacks.map((x, i) => (
						<View key={i} style={styles.row}>
							<View style={styles.potionsCell}>
								{x.potions.map(color => (
									<MaterialCommunityIcons
										name="bottle-tonic-skull"
										size={42}
										color={color}
									/>
								))}
							</View>
							<Text style={styles.percentageText}>
								{x.percentage}
							</Text>
						</View>
					))}
					<View style={styles.totalRow}>
						<Text style={[styles.potionsCell, styles.totalText]}>Total</Text>
						<Text style={[styles.percentageText, styles.totalText]}>
							{bestCombination.total}
						</Text>
					</View>
					<TouchableOpacity
						onPress={handleRequestClose}
						style={styles.closeButton}
					>
						<Text style={styles.closeText}>Close</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	)
}

export default BestCombinationModal


const styles = StyleSheet.create({
	center: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	modalView: {
		width: '90%',
		backgroundColor: '#0F0015EE',
		borderRadius: 32,
		padding: 22,
		borderWidth: 2,
		borderColor: 'black',
	},
	row: {
		height: 50,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'baseline'
	},
	totalRow: {
		height: 50,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginTop: 12,
		paddingTop: 8,
		borderTopColor: 'white',
		borderTopWidth: 1,
	},
	totalText: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	potionsCell: {
		flex: 5,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	percentageText: {
		flex: 2
	},
	closeText: {
		color: '#BBF',
		fontSize: 20
	},
	closeButton: {
		display: 'flex',
		alignItems: 'center',
		paddingVertical: 16
	}
})
