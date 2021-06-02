export function getStoreValue(key) {
	return localStorage.getItem(key)
}
export function setStoreValue(key, value) {
	localStorage.setItem(key, value)
}
export function removeStoreValue(key) {
	localStorage.removeItem(key)
}
export function getSessionValue(key) {
	return sessionStorage.getItem(key)
}
export function setSessionValue(key, value) {
	sessionStorage.setItem(key, value)
}
export function removeSessionValue(key) {
	sessionStorage.removeItem(key)
}

export function format(value) {
	return `$${value}`
}