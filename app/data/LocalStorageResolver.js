export function getDeviceToken() {
	return global.storage.load({
		key: 'deviceToken',
		// id: '0'
	}).then ((res) => res).catch((error) => error);
}

export function setDeviceToken(token:string) {
	global.storage.save({
		key: 'deviceToken',
		// id: '0',
		rawData: {token: token}
	});
}

export function getUserData() {
	return global.storage.load({
		key: 'userData',
		// id: '0'
	}).then ((res) => res).catch((error) => error);
}

export function saveUserData(data:Object) {
	global.storage.save({
		key: 'userData',
		// id: '0',
		rawData: data
	});
}

export function removeUserData() {
	global.storage.remove({
	    key: 'userData',
	    // id: '0'
	});
}

export function setUserAuth(data:Object) {
	global.storage.save({
		key: 'userAuth',
		// id: '0',
		rawData: {
			password: data.password || '',
			accessToken: data.accessToken
		}
	});
}

export function getUserAuth() {
	return global.storage.load({
		key: 'userAuth',
		// id: '0'
	}).then ((res) => res).catch((error) => error)
}

export function removeUserAuth() {
	// global.storage.clearMap();

	global.storage.remove({
	    key: 'userAuth'
	});
	global.storage.remove({
	    key: 'userTruck'
	});
	global.storage.remove({
	    key: 'userData'
	});
}

export function saveUserTruck(data:Object) {
	global.storage.save({
		key: 'userTruck',
		// id: '0',
		rawData: data
	});
}

export function getUserTruck() {
	return global.storage.load({
		key: 'userTruck',
		// id: '0'
	}).then ((res) => res).catch((error) => error)
}

export function removeUserTruckData() {
	global.storage.remove({
	    key: 'userTruck',
	    // id: '0'
	});
}

export function getNotifications() {
	return global.storage.load({
		key: 'notifications',
		// id: '0'
	}).then ((res) => res).catch((error) => error)
}

export function saveNotifications(data:Object) {
	global.storage.save({
		key: 'notifications',
		// id: '0',
		rawData: data
	});
}

export function getServerUrl() {
	return global.storage.load({
		key: 'serverurl',
		// id: '0'
	}).then ((res) => res).catch((error) => error)
}

export function saveServerUrl(data:Object) {
	global.storage.save({
		key: 'serverurl',
		// id: '0',
		rawData: data
	});
}