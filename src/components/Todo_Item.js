import { StyleSheet, View, Text, CheckBox } from 'react-native'
import React, { useState } from 'react'

import { syncTodoItem } from '../utilities/syncTodoItem'
import store from '../store/store'
import updateStore from '../store/updateStore'

export default function Todo_Item( { id } ) {
	const [todoItem, settodoItem] = useState( store[id] )
	return (
		<View style={ styles.container }>
			<View style={ styles.iconCheck }>
				<CheckBox
					onValueChange={ ( newvalue ) =>
						syncTodoItem( settodoItem, updateStore, {
							id,
							...todoItem,
							checked: newvalue,
						} )
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
						syncTodoItem( settodoItem, updateStore, {
							id,
							...todoItem,
							checked: newvalue,
						} )
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
