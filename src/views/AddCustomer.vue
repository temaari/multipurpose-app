<template>
	<div class="pa-10" >
		<h2>Add Another Customer</h2>
		<v-divider class="pa-2" ></v-divider>
		<div id="customers" v-for="(customer, i) in customers" :key="i">
			<div>
				<h3>Customer</h3>
				<v-divider class="pa-2" ></v-divider>
				<input type="text" name="firstname" placeholder="First Name" v-model="customer['firstName']" />
				<input type="text" name="lastname" placeholder="Last Name" v-model="customer['lastName']" />
				<input type="number" name="age" placeholder="Age" v-model="customer['age']" />
				<input type="text" name="gender" placeholder="Gender" v-model="customer['gender']" />
			</div>
			<v-btn @click="remove(customer['id'])" v-if="customers.length > 1" block >Remove</v-btn><br>	
		</div><br>
		<v-btn block @click="add()" >Add Customer</v-btn>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				customers: [],
			}
		},
		mounted() {
			this.add()
		},
		methods: {
			add() {
				this.customers.push({ id: Date.now() })
			},
			remove(id) {
				this.customers = this.customers.filter(customer => customer.id != id)
			}
		},
	}
</script>