<template>
	<div class="home pa-4">
		<h1>Home App</h1>
		<v-divider class="pa-2" ></v-divider>
		<p>Hopefully I'll be able to create some pretty cool Apps and ideas</p>
			<h3>Quick Links To Apps</h3>
			<v-divider></v-divider><br>
			<span v-for="(item, i) in items" :key="i">
				<a v-if="item.title != 'Home'" :href="'http://localhost:8080' + item.to">{{ item.title }}</a>
				<span style="padding-left:20px">&nbsp;</span>
				<br v-if="i % 3 === 0 && i !== 0">
			</span><br>
			<v-btn block rounded @click="toggleEnv()"><span id="btn">Toggle Env</span></v-btn>
	</div>
</template>

<script>
	export default {
		data: () => ({
			drawer: null,
			items: [
				{ title: 'Study', to: '/Study' },
				{ title: 'Website Builder', to: '/WebsiteBuilder' },
				{ title: 'CSV to JSON', to: '/Convert' },
				{ title: 'Input Selecter', to: '/InputSelecter' },
				{ title: 'Todo', to: '/todo' },
				{ title: 'Calendar Picker', to: '/CalendarPicker' },
				{ title: 'Add Customer', to: '/AddCustomer' },
				{ title: 'Vue Slots', to: '/Slots' },
				{ title: 'Toggle Environment', to: '/ToggleProd' },
				{ title: 'Vuetifier', to: '/Vuetifier' },
				{ title: 'FlappyBird', to: '/FlappyBird' },
				{ title: 'Parent & Child', to: '/parent' },
				{ title: 'Computed', to: '/Computed' },
				{ title: 'Item Picker', to: '/itempicker' },
				{ title: 'Munchkin Game Counter', to: '/munchkin' },
				{ title: 'Refresh Components', to: '/refreshcomponents' },
				{ title: 'Calculator', to:'/calculator'},
				{ title: 'Date Calendar', to:'/datecalendar'},
				{ title: 'Form IO', to:'/formio'},
				{ title: 'Redirect Options', to:'/redirect'},
				{ title: 'Never Open', to:'/neveropen'},
				{ title: 'About', to:'/about'},
			],
		}),
		methods: {
			toggleEnv() {
				let url = new URL(window.location.href)
				let param = url.searchParams.get('env')
				if (param != 'dev') {
					url.searchParams.set('env', 'dev')
				} else
					url.searchParams.set('env', 'prod')
				window.location.replace(url)
			}
		}
	}
</script>
