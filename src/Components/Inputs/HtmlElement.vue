<template>
	<div>
		<div v-for="(element, i) in elements" :key="i">
			<input-type :id="element['id']" :title="element['title']" :htmlcode="element['html']">
				<template><slot :name="'element_' + element['id']"></slot></template>
			</input-type>
		</div>
	</div>
</template>

<script>
import InputType from './InputType'

export default {
	props: {
		elements: Array,
	},
	components: {
		InputType: InputType,
	},
}
</script>

<style>

</style>