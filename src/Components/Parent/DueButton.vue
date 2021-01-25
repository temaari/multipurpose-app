<template>
	<div class="pa-2" >
		<p>Click button to change parent value</p>
		<button class="pa-1" @click="updateValue({name:'uno',value: 'Hello there uno'})" >Click me</button>
		<button class="pa-1" @click="updateValue({name:'due',value: 'Hello there due'})" >Click me</button>
	</div>
</template>

<script>
	export default {
		props: {
			value: ''
		},
		methods: {
			updateValue: function ({name, value}) {
				this.$emit('input', {name, value});
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