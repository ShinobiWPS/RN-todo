import { createContext } from 'react'

import storeItems from './storeItems'

function updateStore( todoState ) {
	const { id, text, checked } = todoState
	storeItems[id] = { text, checked }
	//todo save localstorage
}
const StoreContext = createContext( { storeItems, updateStore } )

export default StoreContext
