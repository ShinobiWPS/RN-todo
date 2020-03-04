import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function Todo_Item() {
	return (
		<View style={ styles.container }>
			<View style={ styles.iconCheck }>
				<Text>✅</Text>
			</View>
			<View style={ styles.todoText }>
				<Text>text of todo</Text>
			</View>
			<View style={ styles.iconCheck }>
				<Text>✅</Text>
			</View>
		</View>
	)
}
const styles = StyleSheet.create( {
	container: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'center',
		alignItems: 'stretch',
		alignContent: 'stretch',
		minHeight: 50,
		marginTop: 4,
		marginBottom: 4,
	},
	iconCheck: {
		flexBasis: 44,
		borderWidth: 1,
		borderColor: '#00ff00',
	},
	todoText: {
		flex: 2,
		borderWidth: 1,
		borderColor: '#0000ff',
	},
	iconBin: {
		flexBasis: 44,
		borderWidth: 1,
		borderColor: '#ff0000',
	},
} )
