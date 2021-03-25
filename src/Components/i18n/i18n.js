import english from './english'
import _ from 'lodash'

export function i18n(key) {
	let message = _.get(english, key)
	if (!message)
		return key
	return message
}