<template>
	<div class="item-picker pa-10">
		<div><h1 id="title" ></h1></div><br>
		<div>
			<label for="add">Add Players: </label><br>
			<input class="add pa-2" type="text" v-model="newPlayer" placeholder="Player Name" v-on:keyup.enter="addPlayer()" />
			<button class="btn btn-add pa-2" @click="addPlayer()" >Add Player</button>
			<div v-if="isAddError" class="error" >Please enter a Valid Player Name</div>
		</div><br>
		<div v-if="players.length > 0" >
			<div v-for="(player, i) in players" :key="i">
				<v-container class="grey lighten-5">
					<v-row no-gutters>
						<v-col cols="12" sm="2" ><v-card class="pa-2" outlined tile >{{ player.name }}</v-card></v-col>
						<v-col cols="12" sm="2" ><v-card class="pa-2" outlined tile >Strength: {{ player.level + player.bonus }}</v-card></v-col>
						<v-col cols="12" sm="3" ><v-card class="pa-2" outlined tile >
							Level: {{ player.level }}
							<button class="btn btn-player pa-2" @click="adjust(player.id, 'level')" >+</button>
							<button class="btn btn-player pa-2" @click="adjust(player.id, 'level', false)" >-</button>
						</v-card></v-col>
						<v-col cols="12" sm="3" ><v-card class="pa-2" outlined tile >
							Bonus: {{ player.bonus }}
							<button class="btn btn-player pa-2" @click="adjust(player.id, 'bonus')" >+</button>
							<button class="btn btn-player pa-2" @click="adjust(player.id, 'bonus', false)" >-</button>
						</v-card></v-col>
						<v-col cols="12" sm="1" >
							<button class="btn pa-2" @click="removePlayer(player.id)" >Remove</button>
						</v-col>
					</v-row>
				</v-container>
			</div><br>
			<div>
					<button class="btn btn-block" @click="reset()" >Reset</button><br><br>
					<button class="btn btn-block" @click="clear()" >Clear</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Munchkin',
		data() {
			return {
				newPlayer: '',
				players: [],
				isAddError: false
			}
		},
		watch: {
			newPlayer: function() {
				this.isAddError = false
			}
		},
		mounted() {
			document.getElementById("title").innerText = 'Munchkin Payer Counter'
		},
		methods: {
			clear() {
				this.players = []
			},
			removePlayer(id) {
				this.players = this.players.filter(player => {
					return player.id !== id
				})
			},
			adjust(id, type, isAdd=true) {
				let player = this.players.find(player => {
					return player.id === id
				})
				isAdd ? player[type] += 1 : player[type] -= 1
			},
			addPlayer() {
				if (this.newPlayer != '') {
					this.players.push({
						id: Date.now(),
						name: this.newPlayer,
						level: 1,
						bonus: 0,
					})
					this.newPlayer = ''
				} {
					this.isAddError = true
				}
			},
			reset() {
				this.players.forEach( (item) => {
					item.level = 1
					item.bonus = 0
				})
			},
		},
	}
</script>

<style scoped>
	.item-picker {
		font-size: 20px;
		font-family: 'Courier New', Courier, monospace;
	}
	.btn {
		width: auto;
		border: 1px solid black;
		color: white;
		background-color: black;
	}
	.btn-add {
		width: 35%;
	}
	.btn-block {
		width: 100%;
		height: 50px;
	}
	.btn-player {
		color: black;
		border: 0px;
		background-color: white;
		width: 30%;
		height: auto;
	}
	.add {
		border: 1px solid black;
		width: 65%;
	}
</style>