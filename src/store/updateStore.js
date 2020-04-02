import store from './store'

export default function updateStore( todoState ) {
	const { id, text, checked } = todoState
	store[id] = { text, checked }
	//todo save localstorage
}
