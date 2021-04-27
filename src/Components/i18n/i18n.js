import english from './english'
import en from './en'
import _ from 'lodash'

export function i18n(key) {
	let message = _.get(en, key)
	if (!message) return key
	return message
}