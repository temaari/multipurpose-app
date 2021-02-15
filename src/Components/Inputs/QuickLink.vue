<template>
	<div>
		<h3>Quick Links</h3>
		<v-divider class="pa-2"></v-divider>
		<div v-for="(type, i) in types" :key="i"><li><a :href="'#' + i">{{ type }}</a></li></div>
		<li><a href="#learn">Learn More</a></li><br>
	</div>
</template>

<script>
export default { props: { types: Array } }
</script>