import { CheckBox } from 'react-native'
import React from 'react'

const CheckboxPrebuilt = ( { todoItem, updater } ) => (
	<CheckBox
		onValueChange={ ( newvalue ) => alert( newvalue ) }
		value={ todoItem.checked }
	/>
)
export default CheckboxPrebuilt
