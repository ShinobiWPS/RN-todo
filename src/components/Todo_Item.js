import { StyleSheet, View, Text, CheckBox, ToastAndroid } from 'react-native'
import React, { useState } from 'react'

import updateStore from '../store_components/updateStore'
import store from '../store_components/store'

export default function Todo_Item( { id } ) {
	const todoItem = store[id]
	return (
		<View style={ styles.container }>
			<View style={ styles.iconCheck }>
				<CheckBox
					onValueChange={ ( newvalue ) =>
						updateStore( { ...todoItem, checked: newvalue } )
					}
					value={ todoItem.checked }
				/>
			</View>
			<View style={ styles.todoText }>
				<Text>{ todoItem.text }</Text>
			</View>
			<View style={ styles.iconCheck }>
				<CheckBox
					onValueChange={ ( newvalue ) =>
						updateStore( { ...todoItem, checked: newvalue } )
					}
					value={ todoItem.checked }
				/>
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
