<template>
	<div>
		<label class="custom-field one">
			<input type="text" required/>
			<span class="placeholder">Enter Text</span>
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

	.custom-field input.dirty + .placeholder,
	.custom-field input:valid + .placeholder,
	.custom-field input:focus + .placeholder {
		top: 10px;
		font-size: 10px;
		color: #222;
	}

	/* Needed for this one only */
	.custom-field.one input {
		background: none;
		border: 2px solid #ddd;
		transition: border-color 0.3s ease;
	}

	.custom-field.one input + .placeholder {
		left: 8px;
		padding: 0 5px;
	}

	.custom-field.one input.dirty,
	.custom-field.one input:valid,
	.custom-field.one input:focus {
		border-color: #222;
		transition-delay: 0.1s
	}

	.custom-field.one input.dirty + .placeholder,
	.custom-field.one input:valid + .placeholder,
	.custom-field.one input:focus + .placeholder {
		top: 20px;
		font-size: 10px;
		color: #222;
		background: #fff;
	}
</style>