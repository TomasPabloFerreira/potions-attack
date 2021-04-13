import React from 'react'
import { Modal, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from '.'

const BestCombinationModal = ({ visible, bestCombination, handleRequestClose }) => {
	console.log(bestCombination)
	
	return(
		<Modal
			visible={visible}
			animationType="fade"
			transparent={true}
			onRequestClose={handleRequestClose}
		>
			<View style={styles.center}>
				<View style={styles.modalView}>
					<View style={styles.content}>
						<Text>Best attack:</Text>
					</View>
					<TouchableOpacity onPress={handleRequestClose} style={styles.closeButton}>
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
		minHeight: '60%',
		backgroundColor: '#0F0015EE',
		borderRadius: 32,
		padding: 20,
		borderWidth: 2,
		borderColor: 'black',
	},
	content: {
		flex: 1
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
