<template>
	<div>
		<h3>Swipe Card</h3>
		<v-divider class="pa-2"></v-divider>
		<div id="container">
			<div id="card"></div>
		</div>
		<div>
			<button @click="move('left')">left</button>
			<button @click="move('right')">right</button>
		</div>
		<div id="message"></div>
	</div>
</template>

<script>
export default {
	mounted() {
	},
	methods: {
		move(direction) {
			let id = null
			let card = document.getElementById('card')
			let pos = 75
			clearInterval(id)
			setInterval(() => {
				if (pos == 350 || pos == (-200)) {
					clearInterval(id)
				} else {
					direction === 'left' ? pos-- : pos++
					card.style.left = pos + "px"
				}
			}, 1)
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
	#card {
		width: 250px;
		height: 300px;
		left: 75px;
		top: 50px;
		position: absolute;
		background: rgb(161, 30, 30);
	}
	button {
		padding: 10px;
		width: 100px;
		margin-right: 20px;
		border: 1px solid black;
	}
</style>