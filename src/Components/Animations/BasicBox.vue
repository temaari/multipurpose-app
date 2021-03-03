<template>
	<div class="pt-4" style="clear:both;">
		<h3>Basic Box</h3>
		<v-divider class="pa-2"></v-divider>
		<div>
			<div id="right"><p>Click the button or press space bar to move</p></div>
			<div id="left">
				<p><button @click="myMove()">Click me</button></p>
				<div id="container">
					<div id="animate"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			id: null,
			animate: null,
			pos: 0,
		}
	},
	mounted() {
		window.addEventListener('keyup', (event) => {
			if (event.key == ' ')
				this.myMove()
		})
	},
	methods: {
		myMove() {
			let id = null
			let animate = document.getElementById('animate')
			let pos = 0
			clearInterval(id)
			setInterval(() => {
				if (pos == 350) {
					clearInterval(id)
				} else {
					pos++
					animate.style.top = pos + "px"
					animate.style.left = pos + "px"
				}
			}, 8)
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
	#animate {
		width: 50px;
		height: 50px;
		position: absolute;
		background-color: red;
	}
</style>