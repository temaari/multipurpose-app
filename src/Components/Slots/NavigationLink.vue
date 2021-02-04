<template>
	<div>
		<a
			:href="url"
			class="nav-link"
		>
			<slot></slot>
		</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				url: '',
			}
		},
	}
</script>

<style>

</style>