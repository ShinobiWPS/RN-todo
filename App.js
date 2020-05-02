import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { Provider as PaperProvider, Title, TextInput } from 'react-native-paper'

import { offlineStorage } from './src/store/offlineStorage'
import Todo_Item from './src/components/Todo_Item'

export default function App() {
	const [items, setitems] = useState( {} )

	let addTodoInput
	useEffect( () => {
		offlineStorage.get( 'todos' ).then( ( result ) => {
			setitems( result )
		} )
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
			addTodoInput.clear()
		}
	}

	return (
		<PaperProvider>
			<View
				style={ {
					flex: 1,
					marginTop: 24 /* todo-relative space */,
				} }
			>
				<View
					style={ { flex: 1, flexDirection: 'row', justifyContent: 'center' } }
				>
					<Title style={ { fontSize: 28 } }>To-do</Title>
				</View>
				<View
					style={ { flex: 1, flexDirection: 'row', justifyContent: 'center' } }
				>
					<TextInput
						mode="outlined"
						style={ {
							flexBasis: '80%',
						} }
						onSubmitEditing={ ( event ) => addTodo( event.nativeEvent.text ) }
						placeholder="...watcha gonna do?✍"
						ref={ ( element ) => {
							addTodoInput = element
						} }
					/>
				</View>
				<View style={ { flex: 9 } }>
					<FlatList
						data={ Object.keys( items ) }
						renderItem={ ( { item } ) => (
							<Todo_Item
								key={ item }
								id={ item }
								text={ items[item].text }
								removeCallback={ deleteTodo }
							/>
						) }
					/>
				</View>
			</View>
		</PaperProvider>
	)
}
