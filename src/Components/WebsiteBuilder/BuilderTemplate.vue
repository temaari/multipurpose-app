<template>
<div>
	<div id="header"><slot name="header"><div>Header</div></slot></div>
	<div id="main" class="pa-8"><div :id="element" v-for="(element, i) in elements" :key="i"><slot :name="element"></slot></div></div>
	<div id="footer"><slot name="footer"><div>Footer</div></slot></div>
</div>
</template>

<script>
export default {
	props: { elements: Array },
}
</script>

<style scoped>
	#header {
		height: 100px;
		padding: 18px;
		left: 0;
		top: 0;
		text-align: center;
		background: rgb(7, 6, 96);
		color: rgb(235, 235, 235);
		font-size: 18px;
	}
	#footer {
		position: absolute;
		padding: 10px;
		left: 0;
		bottom: 0;
		width: 100%;
		background: rgb(7, 6, 96);
		color: rgb(235, 235, 235);
		text-align: center;
	}
</style>