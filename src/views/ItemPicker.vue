<template>
	<div class="item-picker pa-3">
		<div><h1 id="title" ></h1></div><br>
		<div>
			<label for="add">Add in your options: </label><br>
			<input class="add pa-2" type="text" v-model="option" placeholder="Item Option" v-on:keyup.enter="add()" />
			<button class="btn btn-add pa-2" @click="add()" >Add Item</button>
			<div v-if="isAddError" class="error" >Please enter a valid input</div>
		</div><br>
		<div v-if="items.length > 0" >
			<h2>Your item picked, should you choose to accept: <span id="picked" ></span></h2><br>
			<div v-if="item.isShown" v-for="item in items" >
				<v-container class="grey lighten-5">
					<v-row no-gutters>
						<v-col cols="12" sm="4" >
							<v-card class="pa-2" outlined tile >
								{{ item.title }}
							</v-card>
						</v-col>
						<v-col cols="12" sm="4" >
							<v-card class="pa-2" outlined tile >
								{{ item.count }}
							</v-card>
						</v-col>
						<v-col cols="12" sm="4" >
							<button class="btn btn-clear pa-2"
								@click="remove(item.id)"
							>
								Remove
							</button>
						</v-col>
					</v-row>
				</v-container>
			</div><br>
			<div>
				<div v-if="buttonCount !== 10" >
					<button class="btn btn-block" @click="odds()" >Beat the Odds {{ buttonCount }} of 10</button><br><br>
					<button class="btn btn-block" @click="randomPick()" >One Time click</button><br><br>
				</div>
				<div v-else >
					<button class="btn btn-block" @click="reset()" >Reset</button><br><br>
				</div>
				<button class="btn btn-block" @click="clear()" >Clear</button>
			</div>
		</div>
	</div>
</template>

<script>
	import RandomGenerator from '../components/RandomGenerator'
	export default {
		name: 'itemPicker',
		data() {
			return {
				option: '',
				buttonCount: 0,
				items: [],
				isAddError: false
			}
		},
		watch: {
			option: function() {
				this.isAddError = false
			}
		},
		mounted() {
			document.getElementById("title").innerText = 'Item Picker'
		},
		components: {
			RandomGenerator: RandomGenerator,
		},
		methods: {
			clear() {
				this.items = []
			},
			remove(id) {
				this.items = this.items.filter(item => {
					return item.id !== id
				})
			},
			add() {
				if (this.option != '') {
					this.items.push({
						id: Date.now(),
						title: this.option,
						count: 0,
						isShown: true,
					})
					this.option = ''
				} {
					this.isAddError = true
				}
			},
			odds() {
				let number = RandomGenerator.methods.getRandomNumber(this.items.length)
				this.items[number].count += 1
				this.buttonCount += 1
				if (this.buttonCount === 10) this.pickitem()
			},
			randomPick() {
				let number = RandomGenerator.methods.getRandomNumber(this.items.length)
				document.getElementById("picked").innerText = this.items[number].title
				this.buttonCount = 10
				// Only show picked item
				this.items.forEach( (item => {
					if (item.id !== this.items[number].id) {
						item.isShown = false
					}
				}))
			},
			reset() {
				this.buttonCount = 0
				this.items.forEach( (item) => {
					item.count = 0
					item.isShown = true
				})
				document.getElementById("picked").innerText = ''
			},
			pickitem() {
				this.items.sort((a, b) => {
					return b.count - a.count
				})
				document.getElementById("picked").innerText = this.items[0].title
				// Only show picked item
				this.items.forEach( (item => {
					if (item.id !== this.items[0].id) {
						item.isShown = false
					}
				}))
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
	.btn-clear {
		color: black;
		background-color: white;
		width: 100%;
		height: 50px;
	}
	.add {
		border: 1px solid black;
		width: 65%;
	}
</style>