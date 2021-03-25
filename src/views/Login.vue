<template>
	<div class="main">
		<div v-if="!!SaveError" class="error"><strong>Error!</strong> {{ SaveError }}</div>
		<h3>Account Loggin</h3>
		<div class="login">
			<form class="form">
				<div class="username">
					<label class="field input">
						<input v-model="username" @keyup.enter="submit()" type="text" required :disabled="IsLoading"/>
						<span class="placeholder">Username</span>
					</label>
				</div>
				<div class="password">
					<label class="field input">
						<input v-model="password" @keyup.enter="submit()" type="password" required :disabled="IsLoading"/>
						<span class="placeholder">Password</span>
					</label>
				</div>
				<p>&nbsp;</p>
				<input @click="submit()" class="button" type="button" value="Save"/>
				<input @click="logout()" class="button" type="button" value="logout"/>
				<div v-if="IsLoading" class="loader"></div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			SaveError: null,
			IsLoading: false,
			username: '',
			password: '',
		}
	},
	methods: {
		getAccounts() {
			return (
				[
					{ user: 'Briana', pw: '123' },
					{ user: 'Bob', pw: '123' },
					{ user: 'Jim', pw: '123' },
					{ user: 'Chris', pw: '123' },
				]
			)
		},
		isValidUser(account) {
			return (
				account.user.toLowerCase() === this.username.toLowerCase() &&
				account.pw === this.password
			)
		},
		verifyAccount() {
			let accounts = this.getAccounts()
			return (accounts.filter((account) => this.isValidUser(account)).length === 1)
		},
		validateInput() {
			let isValidated = true

			if (isValidated && this.username === '') {
				this.SaveError = "Please enter a username"
				isValidated = false
			} else if (this.password === '') {
				this.SaveError = "Please enter a password"
				isValidated = false
			}

			return isValidated
		},
		logout() {
			location.href = location.origin + location.pathname
		},
		submit() {
			this.SaveError = null
			this.IsLoading = true

			if (this.validateInput()) {
				setTimeout(() => {
					if (this.verifyAccount()) {
						location.href = location.href + '?env=dev'
						this.IsLoading = false
					} else {
						this.SaveError = "Invalid username or password"
						this.IsLoading = false
					}
				}, 1000)
			} else
				this.IsLoading = false
		},
	}
}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.main {
		padding: 2rem;
		width: auto;
		margin: 3rem 10% 0 10%;
		border: none;
	}

	.form .field {
		display: flex;
		position: relative;
		font-size: 14px;
		padding-top: 20px;
		margin-bottom: 5px;
	}

	.form .field input {
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

	.form .field .placeholder {
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

	.form .field input.dirty + .placeholder,
	.form .field input:valid + .placeholder,
	.form .field input:focus + .placeholder {
		top: 10px;
		font-size: 10px;
		color: #222;
	}

	.form .field.input input {
		background: none;
		border: 2px solid #ddd;
		transition: border-color 0.3s ease;
	}

	.form .field.input input + .placeholder {
		left: 8px;
		padding: 0 5px;
	}

	.form .field.input input.dirty,
	.form .field.input input:valid,
	.form .field.input input:focus {
		border-color: #222;
		transition-delay: 0.1s
	}

	.form .field.input input.dirty + .placeholder,
	.form .field.input input:valid + .placeholder,
	.form .field.input input:focus + .placeholder {
		top: 20px;
		font-size: 10px;
		color: #222;
		background: #fff;
	}

	.form .button {
		float: left;
		border: 0;
		outline: none;
		border-radius: 20%;
		background: rgb(160, 170, 160);
		padding: 0.35rem;
		margin: 1.75rem 1.75rem 0 0;
		width: auto;
		min-width: 3rem;
		transition-delay: 0.1s;
	}
	.form .button:hover,
	.form .button:focus {
		background: rgb(121, 124, 121);
	}

	.loader {
		float: left;
		position: absolute;
		border: 4px solid #f3f3f3;
		border-radius: 50%;
		border-top: 4px solid #3498db;
		width: 20px;
		height: 20px;
		-webkit-animation: spin 2s linear infinite; /* Safari */
		animation: spin 2s linear infinite;
	}

	/* Safari */
	@-webkit-keyframes spin {
		0% { -webkit-transform: rotate(0deg); }
		100% { -webkit-transform: rotate(360deg); }
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	.error {
		height: 2.25rem;
	}
</style>