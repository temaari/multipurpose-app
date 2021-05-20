<template>
<div>
	<div class="header" id="header">
		<h1>Lorem ipsum dolor sit amet consectetur.</h1>
	</div>
	<div class="nav-bar">
		<div class="nav-btn">
			<button v-for="(item, i) in routes" :key="i" type="button"><a :href="origin + item.to"><h6>{{ item.title }}</h6></a></button>
		</div>
	</div>
	<div class="content">
		<div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit in ut, dolores nesciunt fugiat, alias vitae at atque, necessitatibus unde excepturi magnam voluptate earum impedit temporibus quidem sapiente doloremque beatae odit sequi quo sunt id maxime minima. Sequi nesciunt similique aperiam in, ratione dolore sed facere id accusantium illum, ipsa, eaque temporibus rem optio? Sit adipisci, animi maxime fugit cumque totam minima officiis asperiores molestias, nemo modi illum? Autem labore eum dignissimos officiis maxime, consequatur assumenda optio non eaque corrupti sequi quia, laudantium eos nam iste veniam dolorum! Autem harum quam, beatae suscipit dignissimos quos dolorum deserunt enim repellendus consequatur?</p></div>
		<p>&nbsp;</p>
		<div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit in ut, dolores nesciunt fugiat, alias vitae at atque, necessitatibus unde excepturi magnam voluptate earum impedit temporibus quidem sapiente doloremque beatae odit sequi quo sunt id maxime minima. Sequi nesciunt similique aperiam in, ratione dolore sed facere id accusantium illum, ipsa, eaque temporibus rem optio? Sit adipisci, animi maxime fugit cumque totam minima officiis asperiores molestias, nemo modi illum? Autem labore eum dignissimos officiis maxime, consequatur assumenda optio non eaque corrupti sequi quia, laudantium eos nam iste veniam dolorum! Autem harum quam, beatae suscipit dignissimos quos dolorum deserunt enim repellendus consequatur?</p></div>
	</div>
	<div class="footer"><div><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cupiditate?</p></div></div>
</div>
</template>

<script>
export default {
	data: () => {
		return {
			origin: 'http://localhost:8080/',
			routes: [
				{ title: 'HOME', to: 'ihome' },
				{ title: 'ABOUT', to: 'iabout' },
				{ title: 'BLOG', to: 'formio' },
				{ title: 'PRODUCT', to: 'modal' },
				{ title: 'CART', to: 'login' },
				{ title: 'CONTACT US', to: 'ihome' },
			],
		}
	},
}
</script>

<style scoped>
	* {
		font-family: sans-serif;
	}
	h1, h2, h3, h6 {
		font-size: 3ch;
		font-weight: bold;
	}
	p {
		font-size: 2ch;
	}
	.header {
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		background-color: black;
		color: white;
		width: 100%;
		height: 7em;
	}
	.nav-bar {
		top: 0;
		min-height: 5em;
		margin: auto auto;
		padding: 1rem 1rem;
		max-width: 65em;
	}
	.nav-btn {
		display: flex;
		flex-wrap: wrap;
	}
	.nav-btn > * {
		box-shadow: 1px 1px 1px 1px;
		flex: 1 1 18em;
	}
	.content {
		margin-top: 20em;
		padding: 1rem 1rem;
		min-height: 60em;
		height: auto;
		max-width: 65em;
		margin: auto auto;
	}
	.footer {
		bottom: 0;
		background-color: black;
		color: white;
		width: 100%;
		height: 8em;
		padding: 10px;
		text-align: center;
	}
</style>