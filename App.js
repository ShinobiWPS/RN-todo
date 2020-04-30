import React, { useState, useEffect } from 'react'
import { Text, View, TextInput } from 'react-native'

import { offlineStorage } from './src/store/offlineStorage'
import Todo_Item from './src/components/Todo_Item'

const App = () => {
	const [items, setitems] = useState()

	useEffect( () => {
		offlineStorage.get( 'todos' ).then( ( result ) => setitems( result ) )
		return () => {}
	}, [] )

	function deleteTodo( id ) {
		const newItems = { ...items }
		delete newItems[id]
		setitems( newItems )
		offlineStorage.set( 'todos', newItems )
	}

	function addTodo( todoText ) {
		if ( todoText ) {
		const todoID = `${ Math.random() }`
		const newItems = { [todoID]: { text: todoText }, ...items }
		setitems( newItems )
		offlineStorage.set( 'todos', newItems )
	}
	}

	return (
		<View
			style={ {
				flex: 1,
				marginTop: 24 /* todo-relative space */,
			} }
		>
			<View style={ { flex: 1, flexDirection: 'row', justifyContent: 'center' } }>
				<Text style={ { fontSize: 28 } }>To do</Text>
			</View>
			<View style={ { flex: 1, flexDirection: 'row', justifyContent: 'center' } }>
				<TextInput
					style={ {
						height: 40,
						borderColor: 'gray',
						borderWidth: 1,
						flexBasis: '80%',
					} }
					onSubmitEditing={ ( event ) => addTodo( event.nativeEvent.text ) }
					placeholder="...watcha gonna do?✍"
				/>
			</View>
			<View style={ { flex: 9 } }>
				{ items
					&& Object.keys( items ).map( ( id ) => (
						<Todo_Item
							key={ id }
							id={ id }
							text={ items[id].text }
							removeCallback={ deleteTodo }
						/>
					) ) }
			</View>
		</View>
	)
}
export default App
