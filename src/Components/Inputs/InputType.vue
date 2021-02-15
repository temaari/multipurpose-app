<template>
	<div :id="id">
		<h3>{{ title }}</h3>
		<v-divider class="pa-2"></v-divider>
		<slot></slot>
		<v-text-field :id="'copytext_' + id" v-model="htmlcode" filled readonly @mouseup="copy()" append-icon="mdi-content-copy"></v-text-field>
		<v-snackbar v-model="snackbar" :timeout="2000">Copied {{ htmlcode }}</v-snackbar>
	</div>
</template>

<script>
	export default {
		data: () => { return { snackbar: false } },
		props: { id: Number, title: String, htmlcode: String },
		methods: {
			copy() {
				document.getElementById('copytext_' + this.id).select()
				this.snackbar = document.execCommand('copy')
			}
		},
	}
</script>