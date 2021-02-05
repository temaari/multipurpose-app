<template>
	<div class="pa-3" >
		<h3>Customer</h3>
		<input type="text" name="firstname" placeholder="First Name" v-model="firstName" />
		<input type="text" name="lastname" placeholder="Last Name" v-model="lastName" />
		<input type="number" name="age" placeholder="Age" v-model="age" />
		<input type="text" name="gender" placeholder="Gender" v-model="gender" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			id: 0,
			firstName: '',
			lastName: '',
			age: 0,
			gender: '',
		}
	},
	mounted() {
		this.id = this.customer.id
		this.firstName = this.customer.firstName != null ? this.customer.firstName : ''
		this.lastName = this.customer.lastName != null ? this.customer.lastName : ''
		this.age = this.customer.age != null ? this.customer.age : 0
		this.gender = this.customer.gender != null ? this.customer.gender : ''
	},
	props: {
		customer: Object,
	},
	watch: {
		firstName : function (data) {
			this.updateCustomer(data, 'firstName')
		},
		lastName : function (data) {
			this.updateCustomer(data, 'lastName')
		},
		age : function (data) {
			this.updateCustomer(data, 'age')
		},
		gender : function (data) {
			this.updateCustomer(data, 'gender')
		},
	},
	methods: {
		updateCustomer(data, dataName) {
			this.$emit('input', {
				object: 'customers',
				id: this.id,
				dataName: dataName,
				value: data
			})
		}
	},
	props: {
		customer: Number,
	},
}
</script>

<style scoped>
	input {
		padding: 3px;
	}
</style>