<template>
	<div class="main">
		<h1>Order your pizza</h1>
		<div>
			<table style="width: 100%; text-align: center;">
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Ingredients</th>
					<th>Cost</th>
				</tr>
				<tr v-for="(list, i) in PIZZALIST" :key="i">
					<td>{{ list.id+1 }}</td>
					<td>{{ list.name }}</td>
					<td><span v-for="(item, k) in list.ingredients" :key="k">{{ item }} </span></td>
					<td>${{ list.cost.toFixed(2) }}</td>
				</tr>
			</table>
		</div>
		<p>&nbsp;</p><br><br>
		<div style="display: flex; justify-content: center;">
			<div>
				<h3>Current Order</h3>
				<p>
					<span>${{ Order.total.toFixed(2) }}</span><br>
					<span>Total Pizza: {{ Order.count }}</span>
					<div>
						<h4>Pizza</h4>
						<div v-for="(pizza, p) in Order.pizza" :key="p">
							<p>{{ pizza.name }}</p>
						</div>
					</div>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			PIZZALIST: [
				{ name: "Marinara", ingredients: ['sause'], cost: 14, id: 0 },
				{ name: "Margherita", ingredients: ['sause', 'cheese'], cost: 16, id: 1 },
				{ name: "Pepperoni", ingredients: ['sause', 'cheese', 'pepperoni'], cost: 18, id: 2 },
				{ name: "Prosciutto", ingredients: ['sause', 'cheese', 'proscuitto'], cost: 18, id: 3 },
				{ name: "Vege", ingredients: ['sause', 'cheese', 'vege'], cost: 16.50, id: 4 },
				{ name: "Pinapple", ingredients: ['sause', 'cheese', 'pinnaple'], cost: 18, id: 5 },
				{ name: "Sausage", ingredients: ['sause', 'cheese', 'sausage'], cost: 18, id: 6 },
				{ name: "All Meat", ingredients: ['sause', 'cheese', 'pepperoni', 'sausage'], cost: 19.20, id: 7 },
				{ name: "New York Style", ingredients: ['sause', 'cheese', 'pepperoni'], cost: 19, id: 8 }
			],
			Order: {
				name: '',
				pizza: [],
				count: 0,
				total: 0
			},
			IsOrdering: false,
			Orders: []
		}
	},
	mounted() {
		window.addEventListener('keypress', event => {
			this.handleKeyPress(event.keyCode, event.key)
		})
	},
	methods: {
		handleKeyPress(keyCode, key) {
			switch (keyCode) {
				case 13: {
					if (this.IsOrdering) this.makeOrder()
					break;
				}
				case 32: {
					if (this.IsOrdering) this.cancelOrder()
					break;
				}
				default: {
					if (parseInt(key) && key !== '0')
						this.selectPizzaKey(parseInt(key))
					break;
				}
			}
		},
		selectPizzaKey(key) {
			this.IsOrdering = true

			if (!!this.PIZZALIST[key-1]) {
				this.addPizza(this.PIZZALIST[key-1])
			}
		},
		addPizza(pizza) {
			this.Order.pizza.push(pizza)
			this.Order.total = this.Order.total + pizza.cost
			this.Order.count++
		},
		cancelOrder() {
			this.Order.name = ''
			this.Order.pizza = []
			this.Order.count = 0
			this.Order.total = 0
		},
		makeOrder() {
			this.Order.name = prompt("Name for order?")
		},
	},
}
</script>

<style scoped>
	.main {
		max-width: 50em;
		margin: auto;
	}
</style>