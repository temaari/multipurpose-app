<template>
	<div class="main">
		<section>
			<h1>Even Columns</h1>
			<div class="even-columns">
				<div class="col"></div>
				<div class="col"></div>
				<div class="col"></div>
			</div>
		</section>

		<section>
			<h1>Grid-ish</h1>
			<div class="grid-ish">
				<div class="col"></div>
				<div class="col"></div>
				<div class="col"></div>
				<div class="col"></div>
				<div class="col"></div>
			</div>
		</section>

		<section>
			<h1>Content Sidebar</h1>
			<div class="content-sidebar">
				<div class="col content"></div>
				<div class="col sidebar"></div>
			</div>
		</section>
	</div>
</template>

<style scoped>
	* {
		border: 1px solid black;
	}

	.main {
		background: lightgrey;
		width: 100%;
		height: 100%;
		padding: auto;
	}

	h1,
	h2,
	h3 {
		border: none;
		display: flex;
		justify-content: center;
		margin: 1em;
	}

	section {
		margin: 5em 3em;
		padding: 1em;
		width: auto;
		height: auto;
		background: white;
	}

	section > div {
		width: auto;
		height: 12em;
		border: none;
	}

	section .col {
		background: grey;
		width: auto;
		margin: 0.5em;
	}

	.even-columns {
		display: flex;
	}
	.even-columns > * {
		flex-basis: 100%;
	}

	.grid-ish {
		display: flex;
		flex-wrap: wrap;
	}
	.grid-ish > * {
		flex: 1 1 10em;
	}

	.content-sidebar {
		display: flex;
		flex-wrap: wrap;
	}
	.content-sidebar .col {
		margin: none;
	}
	.content-sidebar .content {
		flex: 1 1 60%;
	}
	.content-sidebar .sidebar {
		flex: 1 1 30%;
	}
</style>