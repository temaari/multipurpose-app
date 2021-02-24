<template>
	<div class="pa-10" >
		<div><h1>Toggle Prod and test Environment</h1></div>
		<div><button @click="toggleEnv()" >
			<span>
				<span v-show="isProd">Prod </span>
				<span v-show="!isProd">Test </span>
				Environment
			</span>
		</button></div>
		<div>
			<environment v-show="isProd" env="Prod" />
			<environment v-show="!isProd" env="Test" />
		</div>
	</div>

</template>

<script>
	import Environment from '../components/Toggle/Environment'

	export default {
		data() {
			return {
				isProd: true,
			}
		},
		methods: {
			toggleEnv() {
				this.isProd = !this.isProd
			}
		},
		components: {
			Environment: Environment
		},
	}
</script>

<style scoped>
	button {
		border: 1px solid black;
		padding: 3px;
		width: 150px;
	}
</style>