<template>
	<div>
		<label class="custom-field">
			<input type="email" required/>
			<span class="placeholder">Enter Email</span>
		</label>
	</div>
</template>

<script>
	export default {
		mounted() {
			const inputs = document.querySelectorAll('input');

			inputs.forEach(el => {
				el.addEventListener('blur', e => {
					if(e.target.value) {
						e.target.classList.add('dirty');
					} else {
					e.target.classList.remove('dirty');
					}
				})
			})
		}
	}
</script>

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
</style>