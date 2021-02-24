<template>
	<div class="pa-10" >
		<base-layout>
			<template v-slot:header>
				<h1>Slot Implementations</h1>
				<v-divider class="pa-2" ></v-divider>
			</template>

			<p><a href="#basic">Basic Slot implementation</a></p>
			<p><a href="#named">Named Slot implementation</a></p>
			<p><a href="#scoped">Scoped Slot Implementation</a></p>

			<h3 id="basic" >Basic Slot implementation</h3>
			<v-divider class="pa-2" ></v-divider>
			<navigation-link url="/profile">
				Your Profile {{ name }}
			</navigation-link><br>

			<base-layout>
				<template v-slot:header>
					<h3 id="named" >Named Slot implementation</h3>
					<v-divider class="pa-2" ></v-divider>
				</template>

				<p>A paragraph for some main content</p>
				<p>Maybe some more</p>

				<template v-slot:footer>
					<p>Some Footer</p>
				</template>
			</base-layout>

			<h3 id="scoped" >Scoped Slot Implementation</h3>
			<v-divider class="pa-2" ></v-divider>
			<current-user>
				<template v-slot:default="slotProps" >
					{{ slotProps.user.firstname }}
					{{ slotProps.user.lastname }}
				</template>
			</current-user><br>

			<custom-component>
				<template v-slot:custom>
					<div>This is some custom HTML to go in</div>
				</template>
			</custom-component>

			<template v-slot:footer>
				<v-divider class="pa-2" ></v-divider>
				<p><a :href="url" target="_blank" >Learn more About slots</a> | <a href="#">Go back to the top</a></p>
			</template>
		</base-layout>
	</div>
</template>

<script>
	import NavigationLink from "../components/Slots/NavigationLink"
	import BaseLayout from "../components/Slots/BaseLayout"
	import CurrentUser from '../components/Slots/CurrentUser'
	import CustomComponent from '../components/Slots/CustomComponent'

	export default {
		data() {
			return {
				name: 'Chris',
				url: 'https://vuejs.org/v2/guide/components-slots.html',
			}
		},
		components: {
			NavigationLink: NavigationLink,
			BaseLayout: BaseLayout,
			CurrentUser: CurrentUser,
			CustomComponent: CustomComponent,
		},
	}
</script>

<style scoped>
</style>