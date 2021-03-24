<template>
	<div class="main">
		<div class="login">
			<div class="form">
				<div class="input">
					<input v-model="username" @keyup.enter="submit()" type="email" name="username" id="username" placeholder=""/>
					<label for="username">Username</label>
				</div>
				<div class="input">
					<input v-model="password" @keyup.enter="submit()" type="password" name="password" id="password" placeholder=""/>
					<label for="password">Password</label>
				</div>
				<input @click="submit()" class="button" type="button" value="Save"/>
				<input @click="logout()" class="button" type="button" value="logout"/>
				<div v-if="IsLoading" class="loader"></div>
			</div>
			<div v-if="!!SaveError" class="error"><strong>Error!</strong> {{ SaveError }}</div>
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
					} else
						this.SaveError = "Invalid username or password"

					this.IsLoading = false
				}, 500)
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
		margin: 1.75rem;
		width: auto;
		border: 1px solid rgb(160, 170, 160);
	}

	.form .input {
		position: relative;
		overflow: hidden;
	}
	.form label {
		top: 0;
		left: 0;
		position: absolute;
		display: inline-block;
		width: 100px;
		text-align: left;
		margin: 0 5rem 1.75rem 0;
	}
	.form input {
		position: relative;
		margin: 0 5rem 1.75rem 0;
		padding: 0 0 0 0.2rem;
		outline: none;
		width: auto;
		height: 40px;
		display: inline-block;
		border-bottom: 0.1rem solid rgb(160, 170, 160);
	}
	.form input:focus + label {
		top: 0;
		color: black;
		font-size: 60%;
	}
	.form .button {
		border: 0;
		outline: none;
		border-radius: 20%;
		background: rgb(160, 170, 160);
		padding: 0.35rem;
		margin-right: 1.75rem;
		width: auto;
		min-width: 3rem;
	}

	.loader {
		float: right;
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
</style>