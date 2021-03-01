<template>
	<div class="pa-5">
		<h2>JS Animations with CSS</h2>
		<v-divider class="pa-2"></v-divider>
		<div><p>This is to showcase my animation learnings with vue and javascript</p></div>
		<swipe-card></swipe-card><br>
		<basic-box></basic-box><br>
		<control-box></control-box>
	</div>
</template>

<script>
import BasicBox from '../components/Animations/BasicBox'
import ControlBox from '../components/Animations/ControlBox'
import SwipeCard from '../components/Animations/SwipeCard'

export default {
	components: {
		BasicBox,
		ControlBox,
		SwipeCard,
	},
}
</script>

<style>

</style>