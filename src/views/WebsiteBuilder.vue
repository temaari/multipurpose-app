<template>
	<div>
		<builder-template :elements="elements">
			<template #header><h1>This is the header</h1></template>

			<template #main_0>
				<p>This here is my custom web page that will be able to use html to write some code</p>
			</template>
			<template #main_1>
				<v-textarea solo auto-grow label="Enter Some Text" background-color="grey lighten-2" color="cyan" clearable counter></v-textarea>
				<v-btn block @click="snackbar=!snackbar">Click me</v-btn>
				<v-snackbar transition="scroll-y-transition" v-model="snackbar" :timeout="1000" :top="true">How Awesome</v-snackbar>
			</template>
			<template #main_2>Enter Your Code here<br v-for="(i, k) in 25" :key="k"></template>

			<template #footer><p>This is the footer</p></template>
		</builder-template>
	</div>
</template>

<script>
	import BuilderTemplate from '../components/WebsiteBuilder/BuilderTemplate'

	export default {
		data: () => {
			return {
				snackbar: false,
				elements: [ 'main_0', 'main_1', 'main_2' ]
			}
		},
		components: {
			BuilderTemplate: BuilderTemplate,
		},
	}
</script>