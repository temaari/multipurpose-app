<template>
	<div class="pa-5">
		<div id="header"><h2>JS Animations with CSS</h2><v-divider class="pa-2"></v-divider></div>
		<div><p>This is to showcase my animation learnings with vue and javascript</p></div>
		<mouse-follow></mouse-follow>
		<swipe-card></swipe-card>
		<basic-box></basic-box>
		<control-box></control-box>
		<div id="footer" class="pt-4" style="clear:both;"></div>
	</div>
</template>

<script>
	import BasicBox from '../components/Animations/BasicBox'
	import ControlBox from '../components/Animations/ControlBox'
	import SwipeCard from '../components/Animations/SwipeCard'
	import MouseFollow from '../components/Animations/MouseFollow'

	export default {
		components: {
			BasicBox,
			ControlBox,
			MouseFollow,
			SwipeCard,
		},
	}
</script>