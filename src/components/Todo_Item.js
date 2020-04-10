import { StyleSheet, View, Text, CheckBox } from 'react-native'
import React from 'react'

export default function Todo_Item( { id, text, removeCallback } ) {
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
		display: 'flex',
		justifyContent: 'center',
	},
	todoText: {
		flex: 2,
		borderWidth: 1,
	},
} )
