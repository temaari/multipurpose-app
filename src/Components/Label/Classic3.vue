<template>
	<div class="main">
		<label class="custom-field three">
			<input type="password" required/>
			<span class="placeholder">Enter Password</span>
			<span class="border"></span>
		</label>
	</div>
</template>

<style scoped>
	.custom-field {
		display: flex;
		position: relative;
		font-size: 14px;
		padding-top: 20px;
		margin-bottom: 5px;
	}

	.custom-field input {
		border: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background: #f2f2f2;
		padding: 12px;
		border-radius: 3px;
		width: 250px;
		outline: none;
		font-size: 14px;
	}

	.custom-field .placeholder {
		position: absolute;
		left: 12px;
		top: calc(50% + 10px);
		transform: translateY(-50%);
		color: #aaa;
		transition: 
			top 0.3s ease,
			color 0.3s ease,
			font-size 0.3s ease;
	}

	/* Needed for this one only */
	.main {
		display: flex;
	}

	.custom-field input.dirty + .placeholder,
	.custom-field input:valid + .placeholder,
	.custom-field input:focus + .placeholder {
		top: 10px;
		font-size: 10px;
		color: #222;
	}

	.custom-field.three {
		--draw-duration: 0.1s;
		--draw-color: #222;
		--draw-line-width: 2px;
		--draw-easing: linear;
	}

	.custom-field.three .border {
		width: 100%;
		height: calc(100% - 20px);
		position: absolute;
		left: 0;
		top: 20px;
		transform: none;
		display: flex;
		align-items: center;
		padding-left: 12px;
		border-radius: 3px;
	}

	.custom-field.three .border::after, 
	.custom-field.three .border::before {
		content: "";
		width: 0;
		height: 0;
		display: inline-block;
		position: absolute;
		border-radius: 3px;
	}

	.custom-field.three .border::before {
		left: 0;
		bottom: 0;
		border-right: 0px solid var(--draw-color);
		border-bottom: 0px solid var(--draw-color);
		transition: 
			border 0s linear calc(var(--draw-duration) * 4),
			height var(--draw-duration) var(--draw-easing) calc(var(--draw-duration) * 2),
			width var(--draw-duration) var(--draw-easing) calc(var(--draw-duration) * 3);
	}

	.custom-field.three .border::after {
		right: 0;
		top: 0;
		border-left: 0px solid var(--draw-color);
		border-top: 0px solid var(--draw-color);
		transition: 
			border 0s linear calc(var(--draw-duration) * 2),
			height var(--draw-duration) var(--draw-easing),
			width var(--draw-duration) var(--draw-easing) var(--draw-duration);
	}

	.custom-field.three input:focus ~ .border::before,
	.custom-field.three input:valid ~ .border::before,
	.custom-field.three input.dirty ~ .border::before,
	.custom-field.three input:focus ~ .border::after,
	.custom-field.three input:valid ~ .border::after,
	.custom-field.three input.dirty ~ .border::after {
		width: 100%;
		height: 100%;
		border-width: var(--draw-line-width);
	}

	.custom-field.three input:valid ~ .border::before,
	.custom-field.three input.dirty ~ .border::before,
	.custom-field.three input:focus ~ .border::before {
		transition-delay: 0s, var(--draw-duration), 0s;
	}

	.custom-field.three input:valid ~ .border::after,
	.custom-field.three input.dirty ~ .border::after,
	.custom-field.three input:focus ~ .border::after {
		transition-delay: 
			calc(var(--draw-duration) * 2), 
			calc(var(--draw-duration) * 3), 
			calc(var(--draw-duration) * 2);
	}
</style>