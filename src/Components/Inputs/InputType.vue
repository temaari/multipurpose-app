<template>
	<div :id="id">
		<h3>{{ title }}</h3>
		<slot></slot>
		<h4>Copy code</h4>
		<v-text-field v-model="htmlcode" readonly></v-text-field>
		<v-divider class="pa-2"></v-divider>
	</div>
</template>

<script>
	export default {
		props: {
			id: Number,
			title: String,
			htmlcode: String,
		}
	}
</script>

<style>

</style>