<template>
	<div class="pa-3" >
		<h2>Add Another Customer</h2>
		<v-divider class="pa-2" ></v-divider>
		<div id="customers" v-for="customer in customers" >
				<customer :customer="customer" v-model="update" ></customer>
				<v-btn @click="remove(customer.id)" v-if="customers.length > 1" block >Remove {{customer.id}}</v-btn>
				<v-divider class="pa-2" ></v-divider>
		</div><br>
		<v-btn block @click="add()" >Add Customer</v-btn>
		<div>{{ customers }}</div>
	</div>
</template>

<script>
	import Customer from '../components/AddCustomer/Customer'
	export default {
		data() {
			return {
				update: {},
				customers: [],
			}
		},
		mounted() {
			this.add()
		},
		watch: {
			update: function (data) {
				this[data['object']].forEach((el) => {
					if (el.id === data['id']) {
						el[data['dataName']] = data['value']
					}
				})
			}
		},
		methods: {
			add() {
				let newCustomer = { id: Date.now() }
				this.customers.push(newCustomer)
			},
			remove(id) {
				this.customers = this.customers.filter(customer => customer.id != id)
			}
		},
		components: {
			Customer: Customer,
		},
	}
</script>

<style scoped>
</style>