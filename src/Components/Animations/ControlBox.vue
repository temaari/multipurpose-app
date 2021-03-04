<template>
	<div class="pt-4" style="clear:both;">
		<h3>Control Box</h3>
		<v-divider class="pa-2"></v-divider>

		<div>
			<div id="right"><p>Use w,a,s,d to move box around</p></div>
			<div id="left"><div id="container"><div id="box"></div></div></div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			posX: 0,
			posY: 350,
			velocity: 5,
		}
	},
	mounted() {
		let box = document.getElementById('box')
		box.style.top = this.posY + "px"
		box.style.left = this.posX + "px"
		window.addEventListener('keypress', (event) => { this.moveBy(event.key) })
	},
	methods: {
		moveBy(key) {
			if (key === 'w' && this.posY !== 0) {
				// move up
				this.posY = this.posY - this.velocity
			} else if (key === 'a' && this.posX !== 0) {
				// move left
				this.posX = this.posX - this.velocity
			} else if (key === 's' && this.posY !== 350) {
				// move down
				this.posY = this.posY + this.velocity
			} else if (key === 'd' && this.posX !== 350) {
				// move right
				this.posX = this.posX + this.velocity
			}
			box.style.top = this.posY + "px"
			box.style.left = this.posX + "px"
		}
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
	#box {
		width: 50px;
		height: 50px;
		position: absolute;
		background-color: red;
	}
</style>