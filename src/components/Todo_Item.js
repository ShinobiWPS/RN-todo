import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

import StoreContext from '../store/storeContext'
import CheckboxPrebuilt from './CheckboxPrebuilt'

export default function Todo_Item( { id } ) {
	return (
		<StoreContext.Consumer>
			{ ( store ) => (
				<View style={ styles.container }>
					<View style={ styles.iconCheck }>
						<CheckboxPrebuilt todoItem={ store.storeItems[id] } />
					</View>
					<View style={ styles.todoText }>
						<Text>{ store.storeItems[id].text }</Text>
					</View>
					<View style={ styles.iconCheck }>
						<CheckboxPrebuilt todoItem={ store.storeItems[id] } />
					</View>
				</View>
			) }
		</StoreContext.Consumer>
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
