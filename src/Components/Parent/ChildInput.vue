<template>
	<div class="pa-2" >
		<p>Enter into the input below to change parent value</p>
		<input
			class="pa-1"
			type="text"
			:value="value"
			v-on:input="updateValue($event.target.value)"
		/>
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
</style>