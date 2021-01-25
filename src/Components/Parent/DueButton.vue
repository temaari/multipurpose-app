<template>
	<div class="pa-2" >
		<p>Click button to change parent value</p>
		<button class="pa-1" @click="updateValue({name:'uno',value: 'Hello there uno ' + x})" >Click me</button>
		<button class="pa-1" @click="updateValue({name:'due',value: 'Hello there due ' + y})" >Click me</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				x: 0,
				y: 0,
			}
		},
		props: {
			value: ''
		},
		methods: {
			updateValue: function (value) {
				this.$emit('input', value);
				value.name === 'uno' ? this.x++ : this.y++
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