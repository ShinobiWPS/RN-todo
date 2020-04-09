import { AsyncStorage } from 'react-native'
import * as FileSystem from 'expo-file-system'

export const offlineStorage = {
	get: async( key ) => {
		try {
			const value = await AsyncStorage.getItem( key )
			if ( value !== null ) return JSON.parse( value )
			return {}
		} catch ( error ) {
			alert( '"get" failed' )
		}
		return {}
	},

	set: async( key, value ) => {
		try {
			await AsyncStorage.setItem( key, JSON.stringify( value ) )
			return true
		} catch ( error ) {}
		return false
	},

	delete: async( key ) => {
		try {
			await AsyncStorage.removeItem( key )
			return true
		} catch ( error ) {}
		return false
	},

	merge: async( key, value ) => {
		try {
			await AsyncStorage.mergeItem( key, JSON.stringify( value ) )
			return true
		} catch ( error ) {}
		return false
	},

	clear: () => {
		try {
			AsyncStorage.getAllKeys().then( AsyncStorage.multiRemove )
		} catch ( error ) {}
	},

	deleteDocument: async( uri ) =>
		FileSystem.deleteAsync( uri, { idempotent: true } ),

	getPath: async() => FileSystem.documentDirectory,

	documentExists: async( fileName ) =>
		FileSystem.getInfoAsync( FileSystem.documentDirectory + fileName ),

	downloadFile: async( url, fileName ) => {
		if ( !url || !fileName ) {
			return { ok: false, error: 'Wrong Parameters, url, fileName' }
		}
		const uri = FileSystem.documentDirectory + fileName

		const fileInfo = await FileSystem.getInfoAsync( uri )

		if ( fileInfo.exists ) return { ok: true, downloaded: false, uri, fileName }

		try {
			const result = await FileSystem.downloadAsync( url, uri )

			if ( result.status !== 200 ) {
				try {
					offlineStorage.deleteDocument( uri )
				} catch ( err ) {}
				return {
					ok: false,
					downloaded: false,
					uri: result.uri,
					fileName,
					wrongFile: true,
				}
			}
			return { ok: true, downloaded: true, uri: result.uri, fileName }
		} catch ( err ) {
			return { ok: false, downloaded: false, error: err }
		}
	},
}
