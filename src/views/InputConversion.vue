<template>
	<div class="pa-8">
		<h1>Converting Inputs</h1>
		<v-divider class="pa-2"></v-divider>
		<p>
			As you put numbers in the input it will convert it to a number to 2 decimal spaces.&nbsp;
			<br>Or in other words, dollar value
		</p>
		<input id="amount" type="number" v-model="amount" @blur="convert()"/>
	</div>
</template>
<script>

export default {
	data: () => {
		return {
			amount: '',
		}
	},
	methods: {
		convert() {
			document.getElementById('amount').value = parseFloat(this.amount).toFixed(2)
		},
	},
}
</script>

<style scoped>
	input {
		border: 1px solid black;
		text-align: right;
		padding: 2px;
	}
</style>
