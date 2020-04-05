import { CheckBox } from 'react-native'
import React from 'react'

const CheckboxPrebuilt = ( { todoItem, callback } ) => (
	<CheckBox onValueChange={ () => callback( todoItem.id ) } value={ false } />
)
export default CheckboxPrebuilt
