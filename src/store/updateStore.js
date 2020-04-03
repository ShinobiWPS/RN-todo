import store from './storeContext'

export default function updateStore( todoState ) {
	const { id, text, checked } = todoState
	store[id] = { text, checked }
}
