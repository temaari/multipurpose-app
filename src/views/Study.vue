<template>
	<div class="pa-10" >
		<h1>Find things still to learn</h1>
		<v-divider class="pa-2" ></v-divider>
		
		<v-list-item v-for="(course, i) in courses" :key="i">
			<v-btn block x-large rounded @click="redirect(course.link)">
				<v-list-item-icon>
					<v-icon v-text="course.icon"></v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title v-text="course.name"></v-list-item-title>
					<v-list-item-subtitle v-text="course.description"></v-list-item-subtitle>
				</v-list-item-content>
			</v-btn><br><br><br>
		</v-list-item>
	</div>
</template>

<script>
	export default {
		data: () => {
			return {
				courses: [
					{
						icon: 'mdi-school',
						name: 'Tree Shaking',
						link: 'https://webpack.js.org/guides/tree-shaking/',
						description: 'Learning something new'
					},
					{
						icon: 'mdi-vuetify',
						name: 'Vuetify',
						link: 'https://vuetifyjs.com/en/getting-started/installation/',
						description: 'Learn more about vuetify and how it works'
					},
				]
			}
		},
		methods: {
			redirect(link) {
				open(link, '_blank')
			}
		},
	}
</script>