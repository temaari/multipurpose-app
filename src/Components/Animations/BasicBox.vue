<template>
	<div>
		<h3>Basic Box</h3>
		<v-divider class="pa-2"></v-divider>
		<p><button @click="myMove()">Click me</button></p>
		<div id="container">
			<div id="animate"></div>
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
		window.addEventListener('keypress', (event) => {
			if (event.key == ' ')
				this.myMove()
		})
	},
	methods: {
		myMove() {
			this.id = null
			this.animate = document.getElementById('animate')
			this.pos = 0
			clearInterval(this.id)
			setInterval(() => {
				if (this.pos == 350) {
					clearInterval(this.id)
				} else {
					this.pos++
					this.animate.style.top = this.pos + "px"
					this.animate.style.left = this.pos + "px"
				}
			}, 8)
		},
	}
}
</script>

<style scoped>
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