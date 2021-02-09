<template>
	<div class="pa-3" >
		<h1>Calendar Picker</h1>
		<v-divider class="pa-2" ></v-divider>
		<h3>Date Picker 'vue2-datepicker'</h3>
		<v-divider class="pa-2" ></v-divider>
		<date-picker
			v-model="date"
			type="date"
			:disabled-date="disabledDates"
			format="DD/MM/YYYY"
			title-format="DD/MM/YYYY"
			placeholder="DD/MM/YYYY"
		/>
		<footer>
			<br><v-divider class="pa-2" ></v-divider>
			<div><a href="https://www.npmjs.com/package/vue2-datepicker" target="_blank" >Link to Calendar Info</a></div>
		</footer>
	</div>
</template>

<script>
	import DatePicker from 'vue2-datepicker'
	import 'vue2-datepicker/index.css'

	export default {
		data() {
			return {
				date: '',
				disabledDates: (date) => {
					let currentDate = new Date()
					currentDate.setDate(currentDate.getDate() -1)
					return date < currentDate || date.getDay() === 0 || date.getDay() === 6
				}
			}
		},
		watch: {
			date: function (data) {
				let day = data.getDate() < 10 ? '0' + data.getDate() : data.getDate()
				let month = data.getMonth() + 1
				month = month < 10 ? '0' + month : month
				console.log(day + "/" + month + "/" + data.getFullYear())
			}
		},
		components: {
			DatePicker: DatePicker,
		},
	}
</script>

<style>

</style>