import { createContext } from 'react'

import storeItems from './storeItems'

function updateText( todoState ) {
	const { id, text } = todoState
	storeItems[id] = { ...storeItems[id], text }
	//todo save localstorage
}
const StoreContext = createContext( { storeItems, updateText } )

export default StoreContext
