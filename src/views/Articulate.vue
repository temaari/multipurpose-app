<template>
	<div class="pa-8">
		<h1>Articulate</h1>
		<v-divider class="pa-2"></v-divider>
		<!-- <div v-if="IsMenu" class="start">
			<button @click="IsMenu=!IsMenu"><p><span>Start game</span></p></button>
		</div>
		<div v-else class="play"> -->
		<div class="play">
			<div class="card">
				<h3>Team: <span>{{ players[0].name }}</span></h3>
				<h4>Category:
					 <span>{{ getCategory(players[0]) }}</span>&nbsp;
					 <span v-if="isSpade(players[0])">It's a spade</span>
				</h4>
				<p>word: <span>{{ getWord(players[0]) }}</span></p>
			</div>
			<div class="button-group">
				<button>Next</button>&nbsp;
				<button>Pass</button>
 			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			IsMenu: true,
			players: [{ name: 'Team 1', score: 0 }],
			cartegories: [ 'Object', 'Action', 'Nature', 'Random', 'Person', 'World' ],
			words: {
				object: [
					{ word: 'Tablet', isSpade: true },
					{ word: 'Table', isSpade: false },
				],
				action: [
					{ word: 'Tablet', isSpade: true },
					{ word: 'Table', isSpade: false },
				],
				nature: [
					{ word: 'Tablet', isSpade: true },
					{ word: 'Table', isSpade: false },
				],
				random: [
					{ word: 'Tablet', isSpade: true },
					{ word: 'Table', isSpade: false },
				],
				person: [
					{ word: 'Tablet', isSpade: true },
					{ word: 'Table', isSpade: false },
				],
				world: [
					{ word: 'Tablet', isSpade: true },
					{ word: 'Table', isSpade: false },
				],
			},
		}
	},
	methods: {
		getCategory(player) {
			return this.cartegories[player.score]
		},
		getWord(player) {
			return this.words[this.getCategory(player).toLowerCase()][0].word
		},
		isSpade(player) {
			return this.words[this.getCategory(player).toLowerCase()][0].isSpade
		}
	},
}
</script>

<style scoped>

</style>