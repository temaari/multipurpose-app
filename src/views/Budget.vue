<template>
	<div class="main">
		<div class="header">
			<h1>Budget</h1>
		</div>
		<div class="container headers">
			<div class="container-item title"><p>Income</p></div>
			<div class="container-item title"><p>Expenses</p></div>
			<div class="container-item title"><p>Savings</p></div>
		</div>
		<div class="container">
			<div class="container-item TotalIncome"><span>Total Income&nbsp;</span><input @click="select" type="number" @blur="formatAmount('TotalIncome')" v-model="TotalIncome" placeholder="100.00"></div>
			<div class="container-item TotalExpenses"><span>Total Expenses&nbsp;</span><input @click="select" readonly type="number" v-model="TotalExpenses" placeholder="100.00"></div>
			<div class="container-item TotalSavings"><span>Total Savings&nbsp;</span><input @click="select" readonly type="number" v-model="TotalSavings" placeholder="100.00"></div>
		</div>
		<p class="divider">&nbsp;</p>

		<div class="container">
			<div class="container-item income">
				<div>
					<div class=""><input type="text" placeholder="Details"><input @click="select" type="number" readonly></div>
					<div class=""><input type="text" placeholder="Details"><input @click="select" type="number" readonly></div>
				</div>
			</div>
			<div class="container-item expense">
				<div>
					<div class="ExpenseInput"><input type="text" placeholder="Details"><input @click="select" type="number" @blur="formatAmount('Expense1')" v-model="Expense1" placeholder="100.00"></div>
					<div class="ExpenseInput"><input type="text" placeholder="Details"><input @click="select" type="number" @blur="formatAmount('Expense2')" v-model="Expense2" placeholder="100.00"></div>
					<div class="ExpenseInput"><input type="text" placeholder="Details"><input @click="select" type="number" @blur="formatAmount('Expense3')" v-model="Expense3" placeholder="100.00"></div>
					<div class="ExpenseInput"><input type="text" placeholder="Details"><input @click="select" type="number" @blur="formatAmount('Expense4')" v-model="Expense4" placeholder="100.00"></div>
					<div class="ExpenseInput"><input type="text" placeholder="Details"><input @click="select" type="number" @blur="formatAmount('Expense5')" v-model="Expense5" placeholder="100.00"></div>
				</div> 
			</div>
			<div class="container-item savings">
				<div></div>
			</div>
		</div>

		<p class="divider">&nbsp;</p>
		<div class="container">
			<div class="container-item TotalIncome"><span>Total Income&nbsp;</span><input @click="select" readonly type="number" @blur="formatAmount('TotalIncome')" v-model="TotalIncome" placeholder="100.00"></div>
			<div class="container-item TotalExpenses"><span>Total Expenses&nbsp;</span><input @click="select" readonly type="number" v-model="TotalExpenses" placeholder="100.00"></div>
			<div class="container-item TotalSavings"><span>Total Savings&nbsp;</span><input @click="select" readonly type="number" v-model="TotalSavings" placeholder="100.00"></div>
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
	.container {
		display: flex;
		flex-wrap: wrap;
	}
	.container-item {
		flex: 1 1 15em;
	}
	.container-item input {
		padding: 0 0.5ch;
		width: auto;
		min-height: 5ch;
		border-bottom: 1px solid black;
		margin-right: 0.5ch;
		text-align: right;
	}
	.container-item input[type= text] {
		text-align: left;
	}
	.divider {
		margin-top: 1rem;
		border-bottom: 1px solid black;
	}
</style>