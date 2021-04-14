<template>
	<div class="pa-8">
		<div>
			<h4>Current Date</h4>
			<p>{{ getCurrentDate() }}</p>
			<p>&nbsp;</p>
		</div>
		<div>
			<h3>Normal date: {{ getLocaleDate() }}</h3>
			<h3>USA date: {{ getLocaleDate('usa') }}</h3>
		</div>
	</div>
</template>

<script>
	export default {
		data: () => {
			return {
				day: null,
				month: null,
				year: null,
			}
		},
		mounted() {
			this.setupDates()
			let name1 = undefined ?? "Chris"
			let name2 = null ?? "Chris"
			let name3 = "" ?? "Chris"
			let name5 = " " ?? "Chris"
			let name4 = "Christian" ?? "Chris"
			console.log(name1)
			console.log(name2)
			console.log(name3)
			console.log(name5)
			console.log(name4)
		},
		methods: {
			setupDates() {
				const currentDate = new Date()
				this.day = currentDate.getDate().toString().padStart(2, '0')
				this.month = (currentDate.getMonth()+1).toString().padStart(2, '0')
				this.year = currentDate.getFullYear()
			},
			getCurrentDate(divider) {
				return (this.createDate(this.getDateArray(), divider))
			},
			getLocaleDate(local, divider) {
				const isUSA = (local ?? "nz").toLowerCase().includes('us')

				if (isUSA) return this.getDateUSA(divider)
				return this.getCurrentDate(divider)
			},
			getDateUSA(divider) {
				const d = this.getDateObject()
				return this.createDate([ d['mm'], d['dd'], d['yyyy'] ], divider)
			},
			createDate(date, divider) {
				divider = divider ?? '/'
				return date.join(divider)
			},
			getDateArray() {
				return ([ this.day, this.month, this.year ])
			},
			getDateObject() {
				return ({ "dd": this.day, "mm": this.month, "yyyy": this.year })
			},
		},
	}

</script>

<style scoped>
input {
	height: 500px;
	width: 500px;
	border: 1px solid black;
}
</style>