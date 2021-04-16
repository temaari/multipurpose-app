<template>
	<div class="main">
		<div class="container">
			<card-modal card-title="First Title" title="First Title" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab culpa cum eaque neque. Quas, vel! Vero qui placeat delectus repudiandae harum sapiente tempore, voluptates suscipit quidem ab officiis mollitia reiciendis minima aspernatur a provident voluptatem totam quos tempora? Aliquam sed assumenda accusantium corrupti molestias vero aspernatur dignissimos dolorem at reprehenderit quam perferendis a quia, doloremque atque sequi ratione labore eaque soluta debitis eius. Tempore rerum quae, iure omnis nihil animi possimus dolorum beatae velit alias veniam quam eum perspiciatis sit molestias cumque temporibus inventore facilis. Voluptatibus possimus commodi dolorum dignissimos ut, quod aliquam voluptates asperiores quis veniam maiores, facilis cum!"></card-modal>
			<card-modal card-title="Second Title" title="Second Title" message="This is the second one"></card-modal>
			<card-modal card-title="Third Title" title="Third Title" message="This is the third one"></card-modal>
			<card-modal card-title="Forth Title" title="Forth Title" message="This is the forth"></card-modal>
		</div>
	</div>
</template>

<script>
import CardModal from '../components/Modal/CardModal'
export default {
	components: {
		CardModal
	},
}
</script>

<style scoped>
	.main {
		width: 100%;
		height: 100%;
		margin: 1em;
	}

	.container {
		width: 100%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
	}
	.container > * {
		flex: 0 1 5em;
		margin: 1em;
	}
</style>