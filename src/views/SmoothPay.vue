<template>
	<div>
		<div class="main">
			<section>
				<div class="container">
					<div class="split type-btn">
							<input @click="clickType('Monthly')" class="text-center" id="Monthly" type="button" value="Monthly">
							<input @click="clickType('Fortnightly')" class="text-center" type="button" value="Fortnightly">
							<input @click="clickType('Weekly')" class="text-center" type="button" value="Weekly">
					</div>
				</div>
			</section>
			<section>
				<div class="container">
					<div class="split">
						<div class="start-date">
							<date-picker class="date-picker" input-class="input-class" type="date" format="DD/MM/YYYY" title-format="DD/MM/YYYY" placeholder="dd/mm/yyyy" />
						</div>
						<div class="amount">
							<p>Amount</p>
							<h3><span>${{ Amount }}</span></h3>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
export default {
	components: {
		DatePicker,
	},
	data: () => {
		return {
			basic: '',
			Type: 'Monthly',
			Amount: 0,
			MonthlyAmount: 80,
			FortnightlyAmount: 40,
			WeeklyAmount: 20,
		}
	},
	mounted() {
		this.Amount = this.MonthlyAmount.toFixed(2)
	},
	methods: {
		clickType(type) {
			this.Type = type
			this.Amount = this[type+'Amount'].toFixed(2)
		},
	}
}
</script>

<style scoped>
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	.main {
		margin-inline: auto;
		width: min(90%, 70rem);
		display: flex;
		flex-direction: column;
	}

	section {
		padding: 4rem, 0;
	}

	input {
		border-bottom: 2px solid black;
		width: min(100%, 60em);
		padding: 1rem 1rem;
		outline: none;
	}

	input.text-center:focus {
		font-weight: bold;
	}

	.start-date {
		background: rgb(230, 230, 250);
		width: auto;
		border: none;
	}

	.date-picker {
		margin-inline: auto;
		border-bottom: 1px solid black;
		display: flex;
		flex-direction: column;
		width: auto;
		padding: 1rem 1rem;
		outline: none;
	}

	.input-class {
		outline: none;
		border: none;
	}

	.amount {
		background: rgb(210, 210, 230);
		padding: 1rem 1rem;
		width: auto;
		justify-content: center;
	}

	.text-center {
		text-align: center;
	}

	.container {
		margin-inline: auto;
		margin-bottom: 1rem;
	}

	.split {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 30em) {
		.split {
			flex-direction: row;
		}
		.start-date {
			width: 70%;
			padding-top: 1rem;
		}
		.date-picker {
			width: 95%;
		}
		.amount {
			width: 30%;
		}
		.container {
			margin-bottom: 0;
		}
	}

</style>