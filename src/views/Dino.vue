<template>
	<div class="pa-8">
		<div id="container">
			<div id="dino"></div>
			<div id="bar"></div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		var character = document.getElementById("dino")

		window.addEventListener('keypress', (event) => {
			console.log(event.code)
			character.style.top = "260px"
			console.log(character.style.top)
		})
	},
}
</script>

<style>
	#container {
		width: auto;
		height: 400px;
		position: relative;
		background: rgb(100, 100, 100);
	}
	#dino {
		width: 50px;
		height: 50px;
		left: 40px;
		top: 350px;
		position: absolute;
		background-color: red;
	}

	@keyframes block {
		0%{left:400px}
		100%{left:-50px}
	}

	#bar {
		width: 50px;
		top: 335px;
		height: 65px;
		background-color: black;
		position: relative;
		right: 0px;
		animation: block 2s infinite linear;
	}
</style>