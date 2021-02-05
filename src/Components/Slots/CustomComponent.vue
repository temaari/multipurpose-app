<template>
	<div>
		<div><basic-html /></div>
		<div>
			<slot name="custom" ></slot>
		</div><br>
	</div>
</template>

<script>
	import BasicHtml from './BasicHtml'
	export default {
		components: {
			BasicHtml: BasicHtml
		},
	}
</script>