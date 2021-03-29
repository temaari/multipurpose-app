<template>
	<div class="pa-8">
		<h3>Vue Example</h3>
		<example message="Hello there" :key="key"></example>
		<input @click="refresh()" type="button" value="Refresh Component">
	</div>
</template>

<script>
	import Example from '../components/Example'
	export default {
		data: () => {
			return {
				key: 0,
			}
		},
		methods: {
			refresh() {
				console.log('refresh')
				this.key++
			}
		},
		components: {
			Example,
		}
	}
</script>

<style scoped>
	input {
		border: 1px solid black;
		margin: 1.75rem 1.75rem 1.75rem 0;
		padding: 0.2rem 1rem 0.2rem 1rem;
		display: flex;
	}
</style>