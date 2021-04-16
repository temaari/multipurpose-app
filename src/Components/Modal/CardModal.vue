<template>
	<div>
		<button @click="openModal()" class="card">{{ cardTitle }}</button>
		<div v-if="IsActive" class="modal" id="modal">
			<div class="modal-header">
				<div class="title">{{ title }}</div>
				<button @click="closeModal()">&times;</button>
			</div>
			<div class="modal-body">
				{{ message }}
			</div>
		</div>
		<div v-if="IsActive" id="overlay"></div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			IsActive: false,
		}
	},
	props: {
		cardTitle: String,
		title: String,
		message: String,
	},
	methods: {
		openModal() {
			this.IsActive = true
			setTimeout(() => {
				const overlay = document.getElementById('overlay')
				overlay.addEventListener('click', () => { this.closeModal() })
			}, 500);
		},
		closeModal() {
			this.IsActive = false
			const overlay = document.getElementById('overlay')
			overlay.addEventListener('click', () => { this.closeModal() })
		},
	},
}
</script>

<style scoped>
	.card {
		border: 1px solid black;
		padding: 1em;
	}
	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(1);
		transition: 200ms ease-in-out;
		border: 1px solid black;
		border-radius: 10px;
		z-index: 10;
		background-color: white;
		width: 500px;
		max-width: 80%;
	}

	.modal-header {
		padding: 10px 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid black;
	}

	.modal-header .title {
		font-size: 1.25rem;
		font-weight: bold;
	}

	.modal-header .close-button {
		cursor: pointer;
		border: none;
		outline: none;
		background: none;
		font-size: 1.25rem;
		font-weight: bold;
	}

	.modal-body {
		padding: 10px 15px;
	}

	#overlay {
		position: fixed;
		opacity: 1;
		transition: 200ms ease-in-out;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, .5);
		pointer-events: all;
	}
</style>