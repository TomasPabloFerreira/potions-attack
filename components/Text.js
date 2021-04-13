import React from 'react'
import { Text as NativeText, StyleSheet } from 'react-native'

const Text = (props) => {
	return <NativeText {...props} style={[styles.text, props.style]} />
}

export default Text

const styles = StyleSheet.create({
	text: {
		color: '#eee'
	}
})
