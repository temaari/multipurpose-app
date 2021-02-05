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
		this.id = this.elementId.id
		this.firstName = this.elementId.firstName != null ? this.elementId.firstName : ''
		this.lastName = this.elementId.lastName != null ? this.elementId.lastName : ''
		this.age = this.elementId.age != null ? this.elementId.age : 0
		this.gender = this.elementId.gender != null ? this.elementId.gender : ''
	},
	props: {
		elementId: Object,
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
		elementId: Number,
	},
}
</script>

<style scoped>
	input {
		padding: 3px;
	}
</style>