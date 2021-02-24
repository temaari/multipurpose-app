<template>
	<div class="pa-10" >
		<h1>Calendar Picker</h1>
		<v-divider class="pa-2" ></v-divider>

		<div>
			<h3>Date Picker 'vue2-datepicker'</h3>
			<v-divider class="pa-2" ></v-divider>
			<date-picker
				v-model="date"
				type="date"
				:disabled-date="disabledDates"
				format="DD/MM/YYYY"
				title-format="DD/MM/YYYY"
				placeholder="dd/mm/yyyy"
			/>
			<div><a href="https://www.npmjs.com/package/vue2-datepicker" target="_blank" >vue2-datepicker Docs</a></div><br>
		</div>

		<div>
			<h3>Date Picker 'vue-datepicker-local'</h3>
			<v-divider class="pa-2" ></v-divider>
			<vue-datepicker-local v-model="time" :disabledDate="disabledDates" />
			<div><a href="https://www.npmjs.com/package/vue-datepicker-local" target="_blank" >vue-datepicker-local Docs</a></div><br>
		</div>

		<div>
			<h3>Date Picker 'vuejs-datepicker'</h3>
			<v-divider class="pa-2" ></v-divider>
			<datepicker v-model="datepick" :disabled-dates="disabledDate" />
			<div><a href="https://www.npmjs.com/package/vuejs-datepicker" target="_blank" >vuejs-datepicker Docs</a></div>
		</div>
		</div>
</template>

<script>
	import DatePicker from 'vue2-datepicker'
	import 'vue2-datepicker/index.css'
	import VueDatepickerLocal from 'vue-datepicker-local'
	import Datepicker from 'vuejs-datepicker';

	export default {
		data() {
			return {
				date: '',
				time: new Date(),
				datepick: new Date(),
				disabledDates: (date) => {
					return (date < this.getYesterday() || this.isWeekend(date) || this.isPublicHoliday(date))
				},
				disabledDate: {
					to: this.getYesterday(),
					days: [6, 0],
					dates: [
						new Date(2021, 1, 23),
						new Date(new Date().getFullYear(), 11, 25),
						new Date(new Date().getFullYear(), 11, 25),
					],
				}
			}
		},
		methods: {
			getYesterday() {
				let currentDate = new Date()
				currentDate.setDate(currentDate.getDate() - 1)
				return currentDate
			},
			isWeekend(date) {
				return date.getDay() === 0 || date.getDay() === 6
			},
			isPublicHoliday(date) {
				return (
					(date.getMonth() === 11 && date.getDate() === 25) ||
					(date.getMonth() === 11 && date.getDate() === 26) ||
					(date.getMonth() === 0 && date.getDate() === 1)
				)
			},
		},
		watch: {
			date: function (data) {
				if (!!data) {
					let day = data.getDate() < 10 ? '0' + data.getDate() : data.getDate()
					let month = data.getMonth() + 1
					month = month < 10 ? '0' + month : month
					console.log(day + "/" + month + "/" + data.getFullYear())
				}
			}
		},
		components: {
			DatePicker: DatePicker,
			VueDatepickerLocal: VueDatepickerLocal,
			Datepicker: Datepicker,
		},
	}
</script>

<style>
	.date-picker {
		border: 1px solid black;
		width: 183px;
	}
</style>