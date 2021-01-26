<template>
	<div class="pa-2" >
		<p>Enter into the input below to change parent values</p>
		<input
			class="pa-1"
			type="text"
			v-model="val"
			v-on:input="updateValue({name: 'uno', value: val})"
		/><br>
		<input
			class="pa-1"
			type="text"
			v-model="input"
			v-on:input="updateValue({name: 'first', value: input, object:'myObject'})"
		/><br>
		<input
			class="pa-1"
			type="text"
			v-model="name"
			v-on:input="updateValue({name: 'last', value: name, object:'myObject'})"
		/>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				input: '',
				name: '',
				val: '',
			}
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