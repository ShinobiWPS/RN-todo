export function syncTodoItem( localUpdater, storeUpdater, payload ) {
	storeUpdater( payload )
	localUpdater( payload )
}
