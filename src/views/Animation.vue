<template>
	<div class="pa-5">
		<h2>JS Animations with CSS</h2>
		<v-divider class="pa-2"></v-divider>
		<div><p>This is to showcase my animation learnings with vue and javascript</p></div>
		<basic-box></basic-box><br>
		<control-box></control-box>
	</div>
</template>

<script>
import BasicBox from '../components/Animations/BasicBox'
import ControlBox from '../components/Animations/ControlBox'

export default {
	components: {
		BasicBox,
		ControlBox,
	},
}
</script>

<style>

</style>