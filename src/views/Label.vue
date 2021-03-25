<template>
	<div class="pa-8">
		<h3>Classic</h3><v-divider class="pa-2"></v-divider>
		<classic></classic>
		<p>&nbsp;</p>

		<h3>Classic 1</h3><v-divider class="pa-2"></v-divider>
		<classic-1></classic-1>
		<p>&nbsp;</p>

		<h3>Classic 2</h3><v-divider class="pa-2"></v-divider>
		<classic-2></classic-2>
		<p>&nbsp;</p>

		<h3>Classic 3</h3><v-divider class="pa-2"></v-divider>
		<classic-3></classic-3>
	</div>
</template>

<script>
	import Classic from '../components/Label/Classic'
	import Classic1 from '../components/Label/Classic1'
	import Classic2 from '../components/Label/Classic2'
	import Classic3 from '../components/Label/Classic3'

	export default {
		components: {
			Classic,
			Classic1,
			Classic2,
			Classic3,
		},
	}
</script>