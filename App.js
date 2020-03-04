import React from 'react'
import { Text, View, Platform, StatusBar } from 'react-native'

import Todo_Item from './src/Todo_Item'

export default function App() {
	let hasNotch = false
	if ( Platform.OS === 'android' ) {
		hasNotch = StatusBar.currentHeight > 24
	}
	return (
		<View
			style={ {
				flex: 1,
				marginTop: hasNotch ? 24 : 0 /* todo-relative space */,
			} }
		>
			<View style={ { flex: 1, flexDirection: 'row', justifyContent: 'center' } }>
				<Text style={ { fontSize: 28 } }>Todo</Text>
			</View>
			<View style={ { flex: 9 } }>
				<Todo_Item />
				<Todo_Item />
				<Todo_Item />
			</View>
		</View>
	)
}
