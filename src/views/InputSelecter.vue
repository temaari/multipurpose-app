<template>
	<div class="pa-3">
		<div><h1>Different types of input</h1><v-divider class="pa-2" ></v-divider></div>
		<div><p>Select from the different text fields you can use starting with your class html or new vue components like 'v-text-field'</p></div>
		<div>
			<h3>Quick Links</h3>
			<v-divider class="pa-2"></v-divider>
			<li><a href="#0">Basic</a></li>
			<li><a href="#1">Normal</a></li>
			<li><a href="#2">Outlined</a></li>
			<li><a href="#3">Filled</a></li>
			<li><a href="#4">Solo</a></li>
			<li><a href="#5">Rules</a></li>
			<li><a href="#6">Prepend</a></li>
			<li><a href="#7">Prefix</a></li>
			<li><a href="#8">Suffic</a></li>
			<li><a href="#9">Shaped Outline</a></li>
			<li><a href="#learn">Learn More</a></li>
		</div><br>
		<input-type :id="0" title="Basic Input" htmlcode="<input type='text' placeholder='Normal Html Input'/>">
			<template><input type="text" placeholder="Normal Html Input"/><br><br></template>
		</input-type>
		<input-type :id="1" title="Normal Input" htmlcode="<v-text-field label='Normal input'></v-text-field>">
			<template><v-text-field label="Normal input" clearable></v-text-field></template>
		</input-type>
		<input-type :id="2" title="Outlined Input" htmlcode="<v-text-field label='Outlined Input' outlined></v-text-field>">
			<template><v-text-field label="Outlined Input" clearable outlined></v-text-field></template>
		</input-type>
		<input-type :id="3" title="Filled Input" htmlcode="<v-text-field label='Filled Input' filled></v-text-field>">
			<template><v-text-field label="Filled Input" clearable filled></v-text-field></template>
		</input-type>
		<input-type :id="4" title="Solo Input" htmlcode="<v-text-field label='Solo Input' solo></v-text-field>">
			<template><v-text-field label="Solo Input" clearable solo></v-text-field></template>
		</input-type>
		<input-type :id="5" title="Rules Input" htmlcode="<v-text-field label='rules input' :rules='rules' hide-details='auto'></v-text-field>">
			<template><v-text-field label="rules input" clearable :rules="rules" hide-details="auto"></v-text-field></template>
		</input-type>
		<input-type :id="6" title="Prepend Input" htmlcode="<v-text-field label='With Icon' prepend-inner-icon='mdi-map-marker'></v-text-field>">
			<template><v-text-field label="With Icon" clearable prepend-inner-icon="mdi-map-marker"></v-text-field></template>
		</input-type>
		<input-type :id="7" title="Prefix Input" htmlcode="<v-text-field label='Prefix Input' prefix='$'></v-text-field>">
			<template><v-text-field label="Prefix Input" clearable prefix="$"></v-text-field></template>
		</input-type>
		<input-type :id="8" title="Suffic Input" htmlcode="<v-text-field label='Suffix Input' suffix='@gmail.com'></v-text-field>">
			<template><v-text-field label="Suffix Input" clearable suffix="@gmail.com"></v-text-field></template>
		</input-type>
		<input-type :id="9" title="Shaped Outline Input" htmlcode="<v-text-field label='Shaped Input' shaped outlined></v-text-field>">
			<template><v-text-field label="Shaped Input" clearable shaped outlined></v-text-field></template>
		</input-type>
		<footer>
			<p id="learn"><a href="https://vuetifyjs.com/en/components/text-fields/" target="_blank">Learn more</a></p>
		</footer>
	</div>
</template>

<script>
	import InputType from '../components/Inputs/InputType'

	export default {
		data: () => ({
			rules: [
				value => !!value || 'Required.',
				value => (value && value.length >= 3) || 'Min 3 characters',
			],
		}),
		methods: {},
		components: {
			InputType: InputType,
		},
	}
</script>

<style scoped>
	h1 {
		text-align: center;
	}
	input {
		border: 2px solid lightgrey;
		padding: 4px;
		width: 100%;
		height: 50px;
	}
</style>