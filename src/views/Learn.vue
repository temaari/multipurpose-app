<template>
	<div class="pa-8">
		<h3>Hello there</h3>
		<div id="value"></div>
		<button id="clicker">Click me</button>
	</div>
</template>

<script>
export default {
	mounted() {
		function* IDGenerator() {
			let id = 1
			while (true) {
				yield id
				id++
			}
		}

		const idGenerator = IDGenerator()

		const clicker = document.getElementById('clicker')
		const value = document.getElementById('value')
		clicker.addEventListener('click', () => {
			value.innerHTML = idGenerator.next().value
		})
	}
}
</script>

<style scoped>
button {
	border: none;
	padding: 0 1rem;
	width: min(80%, 10em);
	border-radius: 25px;
	outline: none;
	box-shadow: 0 0 0px 2px rgb(26, 20, 20);
}
button:hover {
	box-shadow: 0 0 5px 4px rgb(26, 20, 20);
}
button:active {
	box-shadow: 0 0 2px 2px rgb(26, 20, 20);
}

</style>