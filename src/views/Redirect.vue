<template>
	<div class="pa-4" >
		<div class="pa-2" >
			<h1>Please Select the way you want to redirect</h1>
		</div><br> 
		<div class="card pa-2" >
			<label class="title pa-2" for="replace">Redirect by Replace</label>
			<p class="pa-2" >Replace the url so you can't come back to this page</p>
			<button class="btn pa-2" name="replace" @click="redirect('replace')" >Click me</button><br>
		</div><br>
		<div class="card pa-2" >
			<label class="title pa-2" for="href">Redirect by href</label>
			<p class="pa-2" >Goes to the url. You can come back here if you want</p>
			<button class="btn pa-2" name="href" @click="redirect('href')" >Click me</button><br>
		</div><br>
		<div class="card pa-2" >
			<label id="goto" class="title pa-2" for="open">Redirect by open</label>
			<p class="pa-2" >Opens the url in a new tab</p>
			<button class="btn pa-2" name="open" @click="redirect('open')" >Click me</button><br>
		</div><br>
		<div class="card pa-2" >
			<label class="title pa-2" for="query">Redirect by query</label>
			<p class="pa-2" >Go to url with some Query String</p>
			<button class="btn pa-2" name="query" @click="redirect('query')" >Click me</button><br>
		</div><br>
		<div class="card pa-2" >
			<label class="title pa-2" for="link">Redirect On Same Page</label><br>
			<a  class="pa-2" href="#goto" name="link" >Go to a single point on the page</a>
		</div><br>
		<div class="card pa-2" >
			<label class="title pa-2" for="link">Redirect On To Point on another page</label><br>
			<a  class="pa-2" href="http://localhost:8080/about#about" name="link" >Go to a single point on another page</a>
		</div><br>
		<br v-for="i in 20" :key="i" >
		<div><p id="goto" >Hello this is the point on the page.<br>Powered by Christian Te Maari</p></div>
	</div>
</template>

<script>

export default {
	name: 'formIO',
	methods: {
		redirect(option) {
			let url = 'http://localhost:8080'
			if (option === 'replace') {
				location.replace(url)
			} else if (option === 'href') {
				location.href = url
			} else if (option === 'open') {
				open(url, '_blank')
			} else if (option === 'query') {
				location.href = url + "?name=christian&age=24&comment=coding is cool"
			}
		},
	},
}

</script>

<style>
	.btn {
		border: 1px solid white;
		background-color: rgb(37, 165, 37);
		width: 100%;
		padding-bottom: 10px;
		background-color: rgb(37, 165, 37);
	}
	.card {
		border: 2px solid black;
	}
</style>