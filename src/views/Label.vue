<template>
	<div class="pa-8">
		<form class="form">
			<div class="input">
				<input id="name" name="name" type="text" required>
				<label for="name">Your Name</label>
			</div>
		</form>
	</div>
</template>

<style>
	.form .input{
		position: relative;
		overflow: hidden;
	}
	input {
		height: 40px;
		position: relative;
		border: 1px solid black;
	}
	input:focus + label {
		color: black;
		font-size: 60%;
	}
	label {
		position: absolute;
	}
	.form label {
			top: 0.9rem;
			left: 0;
	}
	.form input:focus + label {
		top: 0;
	}
</style>