<template>
	<div class="pt-4" style="clear:both;">
		<h3>Swipe Card</h3>
		<v-divider class="pa-2"></v-divider>
		<div>
			<div id="right"><p>Move the Card left or right by button</p></div>
			<div id="left">
				<div id="container">
					<div id="card"></div>
				</div>
				<div>
					<button @click="move('left')">left</button>
					<button @click="move('right')">right</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			cards: [ '1', '2', '3', '4'],
			pos: 75,
			count: 0,
		}
	},
	methods: {
		replaceCard() {
			let card = document.getElementById('card')
			card.style.left = "75px"
			this.pos = 75
			card.innerHTML = this.cards[this.count]
			this.count++
			if (this.count === this.cards.length)
				this.count = 0
		},
		move(direction) {
			let id = null
			let card = document.getElementById('card')
			let pos = this.pos
			if (pos === 350) {
				pos--
			} else if (pos === (-200)) {
				pos++
			}
			clearInterval(id)
			id = setInterval(() => {
				if (pos == 350 || pos == (-200)) {
					clearInterval(id)
					this.replaceCard()
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