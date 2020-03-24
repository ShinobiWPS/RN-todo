import React from 'react'
import { Text, View, Platform, StatusBar } from 'react-native'

import Todo_Item from './src/components/Todo_Item'
/* import useStore from './src/store_components/useStore' */
import store from './src/store_components/store'

export default function App() {
	/* const [store, updateStore] = useStore() */
	const todo_items = Object.keys( store )
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
				{ todo_items.map( ( id ) => (
					<Todo_Item key={ id } id={ id } />
				) ) }
			</View>
		</View>
	)
}
