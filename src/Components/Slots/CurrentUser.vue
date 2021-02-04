<template>
	<div>
		<span>
			<slot v-bind:user="user" >
				{{ user.firstname }}
			</slot>
		</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					firstname: 'Christian',
					lastname: 'Te Maari',
				},
			}
		},
	}
</script>