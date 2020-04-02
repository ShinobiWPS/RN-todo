import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'

import Todo_Item from './src/components/Todo_Item'
import store from './src/store/store'
/* import useStore from './src/store_components/useStore' */

export default function App() {
	const [textInput, settextInput] = useState( '' )
	const todo_items = Object.keys( store )
	return (
		<View
			style={ {
				flex: 1,
				marginTop: 24 /* todo-relative space */,
			} }
		>
			<View style={ { flex: 1, flexDirection: 'row', justifyContent: 'center' } }>
				<Text style={ { fontSize: 28 } }>Todo</Text>
			</View>
			<View style={ { flex: 1, flexDirection: 'row', justifyContent: 'center' } }>
				<TextInput
					style={ {
						height: 40,
						borderColor: 'gray',
						borderWidth: 1,
						flexBasis: '80%',
					} }
					onChangeText={ ( text ) => settextInput( text ) }
					value={ textInput }
					placeholder="...write what to do"
				/>
			</View>
			<View style={ { flex: 9 } }>
				{ todo_items.map( ( id ) => (
					<Todo_Item key={ id } id={ id } />
				) ) }
			</View>
		</View>
	)
}
