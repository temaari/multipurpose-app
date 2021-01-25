<template>
	<div class="pa-2 pt-5" >
		<div>Parent Value: {{ inputValue }}</div>
		<child-input v-model="inputValue" />
		<v-divider class="pa-2" ></v-divider>
		<div>Parent Value: {{ buttonValue }}</div>
		<child-button v-model="buttonValue" />
		<v-divider class="pa-2" ></v-divider>
		<div>Parent Value: {{ button }}</div>
		<button-only v-model="button" />
		<v-divider class="pa-2" ></v-divider>
		<div>Parent Value 1: {{ uno }}</div>
		<div>Parent Value 2: {{ due }}</div>
		<due-button v-model="update" />
		<v-divider class="pa-2" ></v-divider>
	</div>
</template>

<script>
	import ChildInput from '../components/Parent/ChildInput'
	import ChildButton from '../components/Parent/ChildButton'
	import ButtonOnly from '../components/Parent/ButtonOnly'
	import DueButton from '../components/Parent/DueButton'
	export default {
		data() {
			return {
				inputValue: '',
				buttonValue: '',
				button: '',
				uno: '',
				due: '',
				update: {}
			}
		},
		watch: {
			update: function(x) {
				this[x.name] = x.value
			}
		},
		components: {
			ChildInput: ChildInput,
			ChildButton: ChildButton,
			ButtonOnly: ButtonOnly,
			DueButton: DueButton,
		}
	}
</script>

<style scoped>

</style>