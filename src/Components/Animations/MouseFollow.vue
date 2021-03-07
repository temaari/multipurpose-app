<template>
	<div class="pt-4" style="clear:both;">
		<div id="header"><h3>Follow mouse</h3><v-divider class="pa-2"></v-divider></div>
		<div>
			<div id="right"><p>Box will follow the mouse</p></div>
			<div id="left"><div id="container"><div id="mouse"></div></div></div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		document.getElementById('container').onmousemove = (event) => {
			this.moveMouse(document.getElementById('mouse'), event.clientX - 40, event.clientY - 200)
		}
	},
	methods: {
		moveMouse(mouse, x, y) {
			if (x > -5 && x < 355) {
				mouse.style.left = x + "px"
			}
			if (y > -5 && y < 355) {
				mouse.style.top = y + "px"
			}
		},
	}
}
</script>

<style scoped>
	#left {
		width: 50%;
		float: left;
	}
	#right {
		width: 50%;
		float: right;
	}
	#container {
		width: 400px;
		height: 400px;
		position: relative;
		background: rgb(100, 100, 100);
	}
	#mouse {
		width: 50px;
		height: 50px;
		position: absolute;
		background-color: red;
	}
</style>