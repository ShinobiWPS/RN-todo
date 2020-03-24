import store from './store'

export default function updateStore( todoState ) {
	const { id, text, checked } = todoState
	const items = store.items
	items[id] = { id, text, checked }
	store.items[id] = items[id]
	//save localstorage
}
