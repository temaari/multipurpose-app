<template>
	<div class="home pa-4">
		<h1>Home App</h1>
		<v-divider class="pa-2" ></v-divider>
		<p>Hopefully I'll be able to create some pretty cool Apps and ideas</p>
		<h3>Quick Links To Apps</h3>
		<v-divider></v-divider><br>
		<div class="container">
			<div class="container-item" v-for="(item, i) in items" :key="i">
				<span><a :href="getUrl(item.to)">{{ item.title }}</a></span>
			</div>
		</div>
		<p>&nbsp;</p>
		<v-btn block rounded @click="toggleEnv()"><span id="btn">Toggle Env</span></v-btn>
	</div>
</template>

<script>
	export default {
		data: () => ({
			items: [
				{ title: 'Study', to: 'Study' },
				{ title: 'Articulate', to: 'Articulate' },
				{ title: 'Learn', to: 'Learn' },
				{ title: 'Modal', to: 'Modal' },
				{ title: 'Budget', to: 'Budget' },
				{ title: 'Display Flex', to: 'DisplayFlex' },
				{ title: 'Dino', to: 'Dino' },
				{ title: 'SmoothPay', to: 'SmoothPay' },
				{ title: 'Allvue', to: 'Allvue' },
				{ title: 'Editor', to: 'Editor' },
				{ title: 'Label', to: 'Label' },
				{ title: 'Login', to: 'Login' },
				{ title: 'InputConversion', to: 'InputConversion' },
				{ title: 'Website Builder', to: 'WebsiteBuilder' },
				{ title: 'Animations', to: 'Animation' },
				{ title: 'CSV to JSON', to: 'Convert' },
				{ title: 'Input Selecter', to: 'InputSelecter' },
				{ title: 'Todo', to: 'todo' },
				{ title: 'Calendar Picker', to: 'CalendarPicker' },
				{ title: 'Add Customer', to: 'AddCustomer' },
				{ title: 'Vue Slots', to: 'Slots' },
				{ title: 'Toggle Environment', to: 'ToggleProd' },
				{ title: 'Vuetifier', to: 'Vuetifier' },
				{ title: 'FlappyBird', to: 'FlappyBird' },
				{ title: 'Parent & Child', to: 'parent' },
				{ title: 'Computed', to: 'Computed' },
				{ title: 'Item Picker', to: 'itempicker' },
				{ title: 'Munchkin Game Counter', to: 'munchkin' },
				{ title: 'Refresh Components', to: 'refreshcomponents' },
				{ title: 'Calculator', to:'calculator'},
				{ title: 'Date Calendar', to:'datecalendar'},
				{ title: 'Form IO', to:'formio'},
				{ title: 'Redirect Options', to:'redirect'},
				{ title: 'Never Open', to:'neveropen'},
				{ title: 'About', to:'about'},
			],
		}),
		methods: {
			isDev() {
				return (new URL(window.location.href)).searchParams.get('env') === 'dev'
			},
			setUrl(route='', params='') {
				return location.protocol + '//' + location.host + '/' + route + params
			},
			getUrl(route='') {
				return this.setUrl(route, (this.isDev() ? '?env=dev' : ''))
			},
			toggleEnv() {
				location.replace(this.setUrl('', (!this.isDev() ? '?env=dev' : '')))
			},
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-wrap: wrap;
	}
	.container-item {
		flex: 0 1 30ch;
	}
</style>
