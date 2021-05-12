<template>
	<div class="pa-8 container">
		<div class="container-item">
			<h3>Save using local storage</h3>
			<div>
				<p><label for="FirstName">Please enter first name</label></p>
				<input type="text" name="FirstName" v-model="FirstName">
			</div>
			<p></p>
			<div>
				<p><label for="LastName">Please enter last name</label></p>
				<input type="text" name="LastName" v-model="LastName">
			</div>
			<p class="space"></p>
			<div>
				<input @click="saveToLocalStorage" type="button" value="Save to local storage">
				<input @click="removeFromLocalStorage" type="button" value="Remove from local storage">
			</div>
		</div>
		<div class="container-item">
			<h3>Save using session storage</h3>
			<div>
				<p><label for="sFirstName">Please enter first name</label></p>
				<input type="text" name="sFirstName" v-model="sFirstName">
			</div>
			<p></p>
			<div>
				<p><label for="sLastName">Please enter last name</label></p>
				<input type="text" name="sLastName" v-model="sLastName">
			</div>
			<p class="space"></p>
			<div>
				<input @click="saveToSessionStorage" type="button" value="Save to session storage">
				<input @click="removeSessionStorage" type="button" value="Remove from session storage">
			</div>
		</div>
	</div>
</template>

<script>
import { getStoreValue, setStoreValue, removeStoreValue, getSessionValue, setSessionValue, removeSessionValue } from '../components/Common'
export default {
	data: () => {
		return {
			FirstName: '',
			LastName: '',
			sFirstName: '',
			sLastName: '',
		}
	},
	mounted() {
		this.getLocalStorage()
		this.getSessionStorage()
	},
	methods: {
		getLocalStorage() {
			this.FirstName = getStoreValue("first_name")
			this.LastName = getStoreValue('last_name')
		},
		saveToLocalStorage() {
			if (!!this.FirstName) setStoreValue("first_name", this.FirstName)
			if (!!this.LastName) setStoreValue("last_name", this.LastName)
		},
		removeFromLocalStorage() {
			this.FirstName = removeStoreValue("first_name")
			this.LastName = removeStoreValue("last_name")
		},
		getSessionStorage() {
			this.sFirstName = getSessionValue("session_first_name")
			this.sLastName = getSessionValue('session_last_name')
		},
		saveToSessionStorage() {
			if (!!this.sFirstName) setSessionValue("session_first_name", this.sFirstName)
			if (!!this.sLastName) setSessionValue("session_last_name", this.sLastName)
		},
		removeSessionStorage() {
			this.sFirstName = removeSessionValue("session_first_name")
			this.sLastName = removeSessionValue("session_last_name")
		},
	},
}
</script>

<style scoped>
	.container {
		display: flex;
		flex-wrap: wrap;
	}
	.container-item {
		flex: 1 1 30em;
	}
	input {
		border: 1px solid black;
		padding: .5rem;
		min-width: 15em;
		border-radius: 10px;
		margin-right: 1rem;
	}
	.space {
		margin-top: 5em;
	}
</style>