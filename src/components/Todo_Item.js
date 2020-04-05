import { StyleSheet, View, Text, CheckBox } from 'react-native'
import React from 'react'

export default function Todo_Item( {
	id,
	text,
	removeCallback,
	updateCallback,
} ) {
	return (
		<View style={ styles.container }>
			<View style={ styles.iconCheck }>
				<CheckBox onValueChange={ () => removeCallback( id ) } />
			</View>
			<View style={ styles.todoText }>
				<Text>{ text }</Text>
			</View>
			<View style={ styles.iconCheck }>
				<CheckBox onValueChange={ () => removeCallback( id ) } />
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
