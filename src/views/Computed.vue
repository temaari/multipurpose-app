<template>
	<div class="pa-3" >
		<h1>The Reverse Computation Example</h1>
		<p>Enter your message in the input box and then see your message in reverse</p>
		<input type="text" v-model="message" /><br>
		<div>Original Message: {{ message }}</div>
		<div>Reverse Message: {{ reverseMessage }}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: ''
			}
		},
		computed: {
			reverseMessage() {
				return this.message.split('').reverse().join('')
			}
		},
	}
</script>

<style scoped>
	input {
		border: 1px solid black;
		padding: 2px;
	}
</style>
