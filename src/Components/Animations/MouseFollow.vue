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
		document.onmousemove = (event) => {
			this.moveMouse(event.clientX, event.clientY)
		}
	},
	methods: {
		mouseInBounds(mouse, amount, direction) {
			if (amount >= 0 && amount <= 350) {
				mouse.style[direction] = amount + "px"
			} else if (amount < 0) {
				mouse.style[direction] = "0px"
			} else if (amount > 350)
				mouse.style[direction] = "350px"
		},
		moveMouse(x, y) {
			this.mouseInBounds(document.getElementById('mouse'), x - 40, 'left')
			this.mouseInBounds(document.getElementById('mouse'), y - 200, 'top')
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