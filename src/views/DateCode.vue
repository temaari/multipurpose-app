<template>
	<div class="pa-8">
		<div>
			<h4>Current Date</h4>
			<p>{{ getCurrentDate() }}</p>
			<p>&nbsp;</p>
			<h5>Code</h5>
			<p>
				let d = new Date()<br>
				return ([<br>
				d.getDate().toString().padStart(2, '0'),<br>
				(d.getMonth()+1).toString().padStart(2, '0'),<br>
				d.getFullYear()<br>
				]).join('-))
			</p>
		</div>
	</div>
</template>

<script>

	export default {
		methods: {
			getCurrentDate() {
				let current = new Date()
				return ([
					current.getDate().toString().padStart(2, '0'),
					(current.getMonth()+1).toString().padStart(2, '0'),
					current.getFullYear()
				].join('-'))
			}
		},
	}

</script>

<style scoped>
input {
	height: 500px;
	width: 500px;
	border: 1px solid black;
}
</style>