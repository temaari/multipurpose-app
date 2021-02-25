<template>
<div id="app">
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
		padding: 10px;
		left: 0;
		top: 0;
		text-align: center;
		background: rgb(50, 110, 200);
		color: rgb(220, 220, 255);
		font-size: 20px;
	}
	#app {
		background: rgb(240, 240, 230);
	}
	#footer {
		position: absolute;
		padding: 10px;
		left: 0;
		bottom: 0;
		width: 100%;
		background: rgb(50, 110, 200);
		color: rgb(220, 220, 255);
		text-align: center;
	}
</style>