<template>
	<div class="pa-1">
		<builder-template :elements="elements">
			<template #header><h1>This is the header</h1></template>

			<template #main_0>This is the body</template>
			<template #main_1>This is the body</template>
			<template #main_2>This is the body</template>

			<template #footer><p>This is the footer</p></template>
		</builder-template>
	</div>
</template>

<script>
	import BuilderTemplate from '../components/WebsiteBuilder/BuilderTemplate'

	export default {
		data: () => {
			return {
				elements: [
					{ id: 0 },
					{ id: 1 },
					{ id: 2 },
				]
			}
		},
		components: {
			BuilderTemplate: BuilderTemplate,
		},
	}
</script>