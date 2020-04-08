import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'

import Todo_Item from './src/components/Todo_Item'
import storeItems from './src/store/storeItems'

export default function App() {
	/* 	const [textInput, settextInput] = useState( '' ) */
	const [items, setitems] = useState( storeItems )

	function deleteTodo( id ) {
		const newItems = { ...items }
		delete newItems[id]
		setitems( newItems )
		//todo save localstorage
	}

	function addTodo( todoText ) {
		const todoID = `${ Math.random() }`
		const newItems = { [todoID]: { text: todoText, checked: false }, ...items }
		setitems( newItems )
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
					/* onChangeText={ ( text ) => settextInput( text ) } */
					onSubmitEditing={ ( event ) => addTodo( event.nativeEvent.text ) }
					/* 	value={ textInput } */
					placeholder="...watcha gonna do?"
				/>
			</View>
			<View style={ { flex: 9 } }>
				{ Object.keys( items ).map( ( id ) => (
					<Todo_Item
						key={ id }
						id={ id }
						text={ items[id].text }
						removeCallback={ deleteTodo }
						/* updateCallback={ store.updateCallback( { id, textInput } ) } */
					/>
				) ) }
			</View>
		</View>
	)
}
