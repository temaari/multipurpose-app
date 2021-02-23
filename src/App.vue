<template>
	<v-app id="inspire">
		<v-navigation-drawer
			v-if="!isProd" 
			app
			v-model="drawer"
		>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="title">
						Ideas and inspiration
					</v-list-item-title>
					<v-list-item-subtitle>
						Apps for Learning
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list
				dense
				nav
			>
				<v-list-item
					v-for="item in items"
					:key="item.title"
					:to="item.to"
					link
				>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app v-if="!isProd">
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-toolbar-title>Application</v-toolbar-title>
		</v-app-bar>

		<v-main>
			<router-view></router-view>
			<v-btn v-if="isHomePage()" block rounded @click="isProd=!isProd">Edit Page</v-btn>
		</v-main>
	</v-app>
</template>

<script>
	export default {
		data: () => ({
			isProd: false,
			drawer: null,
			items: [
				{ title: 'Home', icon: 'mdi-home', to:'/'},
				{ title: 'Study', icon: 'mdi-school', to: '/Study' },
				{ title: 'Website Builder', icon: 'mdi-wrench', to: '/WebsiteBuilder' },
				{ title: 'CSV to JSON', icon: 'mdi-car-convertible', to: '/Convert' },
				{ title: 'Input Selecter', icon: 'mdi-form-select', to: '/InputSelecter' },
				{ title: 'Todo', icon: 'mdi-format-list-checks', to: '/todo' },
				{ title: 'Calendar Picker', icon: 'mdi-calendar', to: '/CalendarPicker' },
				{ title: 'Add Customer', icon: 'mdi-account-plus', to: '/AddCustomer' },
				{ title: 'Vue Slots', icon: 'mdi-slot-machine', to: '/Slots' },
				{ title: 'Toggle Environment', icon: 'mdi-toggle-switch', to: '/ToggleProd' },
				{ title: 'Vuetifier', icon: 'mdi-vuetify', to: '/Vuetifier' },
				{ title: 'FlappyBird', icon: 'mdi-controller-classic', to: '/FlappyBird' },
				{ title: 'Parent & Child', icon: 'mdi-family-tree', to: '/parent' },
				{ title: 'Computed', icon: 'mdi-desktop-classic', to: '/Computed' },
				{ title: 'Item Picker', icon: 'mdi-guitar-pick', to: '/itempicker' },
				{ title: 'Munchkin Game Counter', icon: 'mdi-controller-classic', to: '/munchkin' },
				{ title: 'Refresh Components', icon: 'mdi-language-html5', to: '/refreshcomponents' },
				{ title: 'Calculator', icon: 'mdi-calculator', to:'/calculator'},
				{ title: 'Date Calendar', icon: 'mdi-calendar', to:'/datecalendar'},
				{ title: 'Form IO', icon: 'mdi-form-select', to:'/formio'},
				{ title: 'Redirect Options', icon: 'mdi-directions', to:'/redirect'},
				{ title: 'Never Open', icon: 'mdi-directions', to:'/neveropen'},
				{ title: 'About', icon: 'mdi-help-box', to:'/about'},
			],
		}),
		methods: {
			isHomePage() {
				return 'http://localhost:8080/' === window.location.href
			}
		},
	}
</script>