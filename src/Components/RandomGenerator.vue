<template>
	<div>
		<h1>Random Number Generator</h1><br>
		<div><h2>This is your Random Number: <span id="number" ></span></h2></div>
	</div>
</template>

<script>
	export default {
		name: 'RandomGenerator',
		props: {
			number: Number,
		},
		mounted() {
			document.getElementById("number").innerHTML = this.getRandomNumber(this.number)
		},
		methods: {
			getRandomNumber(number) {
				return Math.floor(Math.random() * number)
			},
		},
	}
</script>