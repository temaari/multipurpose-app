<template>
	<div class="pa-8">
		<h1>Custom Vue Components</h1>
		<v-divider class="pa-2" ></v-divider><br><br>
		
		<h3>Vue Slider</h3>
		<v-divider class="pa-2" style="width: 50%" ></v-divider>
		<div style="width: 50em;"><custom-slider min="100" max="1000" v-model="value"></custom-slider></div>
		<div><a href="https://www.npmjs.com/package/vue-custom-range-slider" target="_blank" >vue-custom-range-slider</a></div><br>

		<h3>Toggle Button</h3>
		<v-divider class="pa-2" style="width: 50%" ></v-divider>
		<div class="alert-method">
			<div class="alert-method-item"><toggle-button :width="110" :height="50" :font-size="20" :labels="smsLabel" v-model="toggleButton"></toggle-button></div>
			<div class="alert-method-item"><toggle-button :width="110" :height="50" :font-size="20" :labels="emailLabel" v-model="toggleButton"></toggle-button></div>
		</div>
		<p></p>
		<div><a href="https://www.npmjs.com/package/vue-js-toggle-button" target="_blank" >Vue.js toggle/switch button.</a></div><br>
		<h3>Vue Slider</h3>
		<v-divider class="pa-2" style="width: 50%" ></v-divider>
		<br><br>

		<div>
			<p style="font-weight: bold;">I'd like to know when my projected next invoice amount has reached</p>
			<div class="alert-container">
				<div class="alert-container-content"><custom-slider min="100" max="1000" v-model="sliderValue"></custom-slider></div>
				<div class="alert-container-sidebar">
					<div class="alert-method">
						<div class="alert-method-item"><toggle-button :width="110" :height="50" :font-size="20" :labels="smsLabel" v-model="toggleButton"></toggle-button></div>
						<div class="alert-method-item"><toggle-button :width="110" :height="50" :font-size="20" :labels="emailLabel" v-model="toggleButton"></toggle-button></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CustomSlider from "vue-custom-range-slider";
import { ToggleButton } from 'vue-js-toggle-button'
import "vue-custom-range-slider/dist/vue-custom-range-slider.css";
export default {
	mounted() {
		const sliderLabel = document.querySelectorAll(".slider__label")
		sliderLabel.forEach(elem => {
			elem.style.fontSize = '25px'
			elem.style.top = '-50px'
			elem.style.marginLeft = '12px'
		})
	},
	data: () => {
		return {
			label: { checked: 'on', unchecked: 'off' },
			smsLabel: { checked: 'sms', unchecked: 'sms' },
			emailLabel: { checked: 'email', unchecked: 'email' },
			toggleButton: false,
			value: '200',
			sliderValue: '200',
		}
	},
	components: {
		CustomSlider,
		ToggleButton
	},
}
</script>
<style scoped>
	.alert-container {
		display: flex;
	}
	.alert-container-content {
		flex: 1 1 60%;
	}
	.alert-container-sidebar {
		flex: 1 1 30%;
		padding-left: 1rem;
		margin: auto;
	}
	.alert-method {
		display: flex;
	}
	.alert-method-item {
		flex: 0 1 7.5rem;
	}
	.slider__label {
		top: -30px;
	}
</style>