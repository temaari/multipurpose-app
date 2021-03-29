<template>
	<div>
		<p>{{ message }}</p>
		<p>{{ count }}</p>
		<input @click="say()" type="button" value="speak"/>
		<input v-model="type" type="text"/>
		<p>{{ reverse }}</p>
	</div>
</template>

<script>
	export default {
		props: {
			message: String,
		},
		data: () => {
			return {
				count: 5,
				type: '',
			}
		},
		methods: {
			say() {
				this.count++
			},
		},
		computed: {
			reverse: function () {
				return this.type.split('').reverse().join('')
			},
		},
		watch: {
			count: function (data, oldData) {
				console.log("count was changed!!")
			},
		},
		beforeCreate() {
			let current = new Date()
			let time = current.getMilliseconds()
			console.log("before Create", time)
		},
		created() {
			let current = new Date()
			let time = current.getMilliseconds()
			console.log("created at", time)
		},
		beforeMount() {
			let current = new Date()
			let time = current.getMilliseconds()
			console.log("before Mount", time)
		},
		mounted() {
			let current = new Date()
			let time = current.getMilliseconds()
			console.log("mounted ast", time)
		},
		beforeUpdate() {
			let current = new Date()
			let time = current.getMilliseconds()
			console.log("before Update", time)
		},
		updated() {
			let current = new Date()
			let time = current.getMilliseconds()
			console.log("updated at", time)
		},
		beforeDestroy() {
			let current = new Date()
			let time = current.getMilliseconds()
			console.log("before Destroy", time)
		},
		destroyed() {
			let current = new Date()
			let time = current.getMilliseconds()
			console.log("destroyed at", time)
		},
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