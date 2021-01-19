<template>
	
</template>

<script>

	export default {
		name: 'NeverOpen',
		mounted() {
			location.href = 'http://localhost:8080/redirect'
		},
	}

</script>