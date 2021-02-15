<template>
	<div class="pa-3">
		<div><h1>Different types of input</h1><v-divider class="pa-2" ></v-divider></div>
		<input-type :id="0" title="Basic" htmlcode="<input type='text' placeholder='Normal Html Input'/>">
			<template><input type="text" placeholder="Normal Html Input"/><br><br></template>
		</input-type>
		<input-type :id="1" title="Basic" htmlcode="<v-text-field label='Normal input'></v-text-field>">
			<template><v-text-field label="Normal input"></v-text-field></template>
		</input-type>
		<input-type :id="2" title="Basic" htmlcode="<v-text-field label='Outlined Input' outlined></v-text-field>">
			<template><v-text-field label="Outlined Input" outlined></v-text-field></template>
		</input-type>
		<input-type :id="3" title="Basic" htmlcode="<v-text-field label='Shaped Input' filled></v-text-field>">
			<template><v-text-field label="Shaped Input" filled></v-text-field></template>
		</input-type>
		<input-type :id="4" title="Basic" htmlcode="<v-text-field label='Solo Input' solo></v-text-field>">
			<template><v-text-field label="Solo Input" solo></v-text-field></template>
		</input-type>
		<input-type :id="5" title="Basic" htmlcode="<v-text-field label='rules input' :rules='rules' hide-details='auto'></v-text-field>">
			<template><v-text-field label="rules input" :rules="rules" hide-details="auto"></v-text-field></template>
		</input-type>
		<input-type :id="6" title="Basic" htmlcode="<v-text-field label='With Icon' prepend-inner-icon='mdi-map-marker'></v-text-field>">
			<template><v-text-field label="With Icon" prepend-inner-icon="mdi-map-marker"></v-text-field></template>
		</input-type>
		<input-type :id="7" title="Basic" htmlcode="<v-text-field label='Prefix Input' prefix='$'></v-text-field>">
			<template><v-text-field label="Prefix Input" prefix="$"></v-text-field></template>
		</input-type>
		<input-type :id="8" title="Basic" htmlcode="<v-text-field label='Suffix Input' suffix='@gmail.com'></v-text-field>">
			<template><v-text-field label="Suffix Input" suffix="@gmail.com"></v-text-field></template>
		</input-type>
		<input-type :id="9" title="Basic" htmlcode="<v-text-field label='Shaped Input' shaped outlined></v-text-field>">
			<template><v-text-field label="Shaped Input" shaped outlined></v-text-field></template>
		</input-type>
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