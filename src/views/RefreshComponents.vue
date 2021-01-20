<template>
	<div class="movie-picker pa-3">
		<random-generator :number="number" :key="componentKey" /><br>
		<button class="btn" @click="forceRerender()" >Click me</button>
	</div>
</template>

<script>
	import RandomGenerator from '../Components/RandomGenerator'
	export default {
		name: 'RefreshComponents',
		data() {
			return {
				number: 10,
				componentKey: 0,
			}
		},
		components: {
			RandomGenerator: RandomGenerator,
		},
		methods: {
			forceRerender() {
				this.componentKey += 1
			},
		},
	}
</script>

<style scoped>
	.btn {
		width: auto;
		border: 1px solid black;
		color: white;
		background-color: grey;
		font-size: 20px;
		width: 100%;
		height: 50px;
	}
</style>