<template>
	<div class="main">
		<div class="header"><h1>Budget</h1></div>

		<div class="container">


			<div class="container-item">
				<div class="title"><p>Income</p><p class="divider">&nbsp;</p></div>
				<div class="fields"><span><h4>Total Income&nbsp;</h4></span><input @click="select" class="total-amount" type="number" @blur="formatAmount('TotalIncome')" v-model="TotalIncome" placeholder="100.00"></div>
				<p>&nbsp;</p>
				<div class="field">
					<div class="fields"><input type="text" placeholder="Details"><input @click="select" type="number" readonly></div>
					<div class="fields"><input type="text" placeholder="Details"><input @click="select" type="number" readonly></div>
				</div>
				<p>&nbsp;</p>
				<div class="title"><p>Savings</p><p class="divider">&nbsp;</p></div>
				<div class="fields"><span><h4>Total Savings&nbsp;</h4></span><input @click="select" class="total-amount" readonly type="number" v-model="TotalSavings" placeholder="100.00"></div>
				<p>&nbsp;</p>
				<div class="field savings"><div></div></div>
			</div>


			<div class="container-item">
				<div class="title"><p>Expenses</p><p class="divider">&nbsp;</p></div>
				<div class="fields"><span><h4>Total Expenses&nbsp;</h4></span><input @click="select" class="total-amount" readonly type="number" v-model="TotalExpenses" placeholder="100.00"></div>
				<p>&nbsp;</p>
				<div class="field">
					<div class="fields ExpenseInput"><input type="text" placeholder="Details"><input @click="select" type="number" @blur="formatAmount('Expense1')" v-model="Expense1" placeholder="100.00"></div>
					<div class="fields ExpenseInput"><input type="text" placeholder="Details"><input @click="select" type="number" @blur="formatAmount('Expense2')" v-model="Expense2" placeholder="100.00"></div>
					<div class="fields ExpenseInput"><input type="text" placeholder="Details"><input @click="select" type="number" @blur="formatAmount('Expense3')" v-model="Expense3" placeholder="100.00"></div>
					<div class="fields ExpenseInput"><input type="text" placeholder="Details"><input @click="select" type="number" @blur="formatAmount('Expense4')" v-model="Expense4" placeholder="100.00"></div>
					<div class="fields ExpenseInput"><input type="text" placeholder="Details"><input @click="select" type="number" @blur="formatAmount('Expense5')" v-model="Expense5" placeholder="100.00"></div>
				</div>
			</div>


		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			Expense1: '0.00',
			Expense2: '0.00',
			Expense3: '0.00',
			Expense4: '0.00',
			Expense5: '0.00',
			Expense6: '0.00',
			Expense7: '0.00',
			Expense8: '0.00',
			Expense9: '0.00',
			Expense0: '0.00',
			TotalIncome: '',
		}
	},
	computed: {
		TotalExpenses() {
			return (
				parseFloat(this.Expense1) + 
				parseFloat(this.Expense2) + 
				parseFloat(this.Expense3) + 
				parseFloat(this.Expense4) +
				parseFloat(this.Expense5) +
				parseFloat(this.Expense6) +
				parseFloat(this.Expense7) +
				parseFloat(this.Expense8) +
				parseFloat(this.Expense9) +
				parseFloat(this.Expense0)
			).toFixed(2)
		},
		TotalSavings() {
			const exp = this.TotalExpenses || 0

			return parseFloat(this.TotalIncome - exp).toFixed(2)
		},
	},
	methods: {
		formatAmount(amount) {
			this[amount] = parseFloat(this[amount]).toFixed(2)
		},
		select(event) {
			event.target.select()
		}
	},
}
</script>

<style scoped>
	* {
		border: none;
		outline: none;
	}
	.main {
		margin: 1.75rem;
	}
	h1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		font-weight: bold;
		width: 100%;
		min-height: auto;
		font-size: 8ch;
		margin-bottom: 2rem;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
	}
	.container-item {
		padding: 1rem 1.7rem;
		background-color: lightgrey;
		flex: 1 1 15em;
	}
	.container-item input {
		box-shadow: .1rem .3rem .5rem .2rem grey;
		padding: 0 0.5ch;
		width: auto;
		min-height: 10ch;
		border-bottom: 1px solid black;
		margin-right: 1rem;
		margin-bottom: .5rem;
		text-align: right;
	}
	.container-item input[type = text] {
		text-align: left;
	}

	input {
		background-color: rgb(255, 255, 255);
	}

	.fields {
		display: flex;
	}
	.fields > * {
		flex: 1 1 50%;
	}
	.fields input {
		width: 50%;
	}
	.fields h4 {
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		font-size: auto;
	}

	.total-amount {
		margin-left: 1rem;
	}

	.divider {
		margin: 1rem 1rem 1rem 0;
		border-bottom: 1px solid black;
	}
</style>