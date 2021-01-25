<template>
	<div class="pa-2" >
		<p>Click button to change parent value</p>
		<button class="pa-1" @click="updateValue('hello there ' + count)" >Click me</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count: 0,
			}
		},
		props: {
			value: ''
		},
		methods: {
			updateValue: function (value) {
				this.$emit('input', value);
				this.count++
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