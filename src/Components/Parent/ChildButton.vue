<template>
	<div class="pa-2" >
		<p>Enter into the input below and click the button to change parent value</p>
		<input
			class="pa-1"
			type="text"
			v-model="value"
		/><br>
		<button class="pa-1" @click="updateValue(value)" >Click me</button>
	</div>
</template>

<script>
	export default {
		props: {
			value: ''
		},
		methods: {
			updateValue: function (value) {
				this.$emit('input', value);
			}
		}
	}
</script>

<style scoped>
	input {
		border: 1px solid black;
	}
	button {
		border: 1px solid white;
		color: black;
		background-color: green;
	}
</style>