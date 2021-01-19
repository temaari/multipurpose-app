<template>
	<div class="pa-4" >
		<div class="pa-2" >
			<h1>Please Enter your information</h1>
		</div>
		<div class="pa-2" >
			<label class="pa-2" for="fname">First name</label>
			<input class="form pa-2" name="fname" type="text" v-model="fname" />
		</div>
		<div class="pa-2" >
			<label class="pa-2" for="lname">Last name</label>
			<input class="form pa-2" name="lname" type="text" v-model="lname" />
		</div>
		<div class="pa-2" >
			<label class="pa-2 pr-14" for="age">Age</label>
			<input class="form pa-2" name="age" type="text" v-model="age" />
		</div>
		<div class="pa-2" >
			<span v-if="fname !== ''" >Hello there, {{ fname }}</span>
			<span v-if="lname !== ''" >{{ lname }}</span><br>
			<span v-if="age > 0" >You are {{ age }} years old so this year you will be {{ parseInt(age)+1 }} years old</span>
		</div>
		<div class="pa-2" >
			<button v-if="showButton" class="btn btn-conform pa-2" @click="confirm()" >Confirm</button><br>
			<button v-if="showButton" class="btn btn-cancel pa-2" @click="cancel()" >Cancel</button>
		</div>
	</div>
</template>

<script>

export default {
	name: 'formIO',
	data() {
		return {
			fname: '',
			lname: '',
			age: '',
			showButton: false,
		}
	},
	methods: {
		confirm() {
			alert("Well done")
			location.replace("http://localhost:8080")
		},
		cancel() {
			this.fname = ''
			this.lname = ''
			this.age = ''
		},
	},
	watch: {
		fname: function() {
			this.showButton = this.fname !== '' && this.lname !== '' && this.age > 0
		},
		lname: function() {
			this.showButton = this.fname !== '' && this.lname !== '' && this.age > 0
		},
		age: function() {
			this.showButton = this.fname !== '' && this.lname !== '' && this.age > 0
		}
	},
}

</script>

<style>
	.form {
		border: 1px solid black;
		width: auto;
		height: 30px;
	}
	.btn {
		border: 1px solid white;
		background-color: rgb(37, 165, 37);
		width: 100%;
		padding-bottom: 10px;
	}
	.btn-confirm {
		background-color: rgb(37, 165, 37);
	}
	.btn-cancel {
		background-color: rgb(179, 25, 25);
	}
</style>