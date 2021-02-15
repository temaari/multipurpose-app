<template>
	<div class="pa-3">
		<div><h1>Different types of input</h1><v-divider class="pa-2" ></v-divider></div>
		<div><p>Select from the different text fields you can use starting with your class html or new vue components like 'v-text-field'</p></div>

		<quick-link :types="elements"></quick-link>

		<html-element :elements="elements">
			<template #element_0><input type="text" placeholder="Normal Html Input"/><br><br></template>
			<template #element_1><v-text-field label="Normal input" clearable></v-text-field></template>
			<template #element_2><v-text-field label="Outlined Input" clearable outlined></v-text-field></template>
			<template #element_3><v-text-field label="Filled Input" clearable filled></v-text-field></template>
			<template #element_4><v-text-field label="Solo Input" clearable solo></v-text-field></template>
			<template #element_5><v-text-field label="rules input" clearable :rules="rules" hide-details="auto"></v-text-field></template>
			<template #element_6><v-text-field label="With Icon" clearable prepend-inner-icon="mdi-map-marker"></v-text-field></template>
			<template #element_7><v-text-field label="Prefix Input" clearable prefix="$"></v-text-field></template>
			<template #element_8><v-text-field label="Suffix Input" clearable suffix="@gmail.com"></v-text-field></template>
			<template #element_9><v-text-field label="Shaped Input" clearable shaped outlined></v-text-field></template>
		</html-element>

		<p id="learn"><a href="https://vuetifyjs.com/en/components/text-fields/" target="_blank">Learn more</a></p>
	</div>
</template>

<script>
	import HtmlElement from '../components/Inputs/HtmlElement'
	import QuickLink from '../components/Inputs/QuickLink'

	export default {
		data: () => ({
			elements: [
				{ id: 0, title: 'Basic', html: "<input type='text' placeholder='Normal Html Input'/>" },
				{ id: 1, title: 'Normal', html: "<v-text-field label='Normal input' clearable></v-text-field>" },
				{ id: 2, title: 'Outlined', html: "<v-text-field label='Outlined Input' clearable outlined></v-text-field></template>" },
				{ id: 3, title: 'Filled', html: "<v-text-field label='Filled Input' clearable filled></v-text-field></template>" },
				{ id: 4, title: 'Solo', html: "<v-text-field label='Solo Input' clearable solo></v-text-field></template>" },
				{ id: 5, title: 'rules', html: "<v-text-field label='rules input' clearable :rules='rules' hide-details='auto'></v-text-field></template>" },
				{ id: 6, title: 'With Icon', html: "<v-text-field label='With Icon' clearable prepend-inner-icon='mdi-map-marker'></v-text-field></template>" },
				{ id: 7, title: 'Prefix', html: "<v-text-field label='Prefix Input' clearable prefix='$'></v-text-field></template>" },
				{ id: 8, title: 'Suffix', html: "<v-text-field label='Suffix Input' clearable suffix='@gmail.com'></v-text-field></template>" },
				{ id: 9, title: 'Shaped outlined', html: "<v-text-field label='Shaped outlined Input' clearable shaped outlined></v-text-field></template>" },
			],
			rules: [
				value => !!value || 'Required.',
				value => (value && value.length >= 3) || 'Min 3 characters',
			],
		}),
		components: {
			HtmlElement: HtmlElement,
			QuickLink: QuickLink,
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