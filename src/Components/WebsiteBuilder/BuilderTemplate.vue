<template>
<div>
	<div id="header"><slot name="header"><div>Header</div></slot></div>
	<div :id="element['id']" v-for="(element, i) in elements" :key="i"><slot :name="'main_' + element['id']"><div>Enter your code here</div></slot></div>
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
		padding: 12px;
		text-align: center;
		background: rgb(184, 186, 199);
		color: black;
		font-size: 18px;
	}
	#footer {
		position: absolute;
		padding: 10px;
		left: 0;
		bottom: 0;
		width: 100%;
		background: rgb(184, 186, 199);
		color: black;
		text-align: center;
	}
</style>