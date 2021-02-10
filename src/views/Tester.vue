<template>
	<div class="pa-3" >
		<h1>Tester</h1>
		<p>value {{ value }}</p>
		<p>data: () => {return {}}</p>
		<p>data() {<br>return {<br>}<br>}</p>
	</div>
</template>

<script>
	export default {
		data: () => {
			return {
				value: 'hello'
			}
		}
	}
</script>

<style>

</style>