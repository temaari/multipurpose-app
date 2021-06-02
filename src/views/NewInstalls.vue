<template>
	<div class="pa-8">
		<h1>Custom Vue Components</h1>
		<v-divider class="pa-2" ></v-divider><br><br>
		
		<h3>Vue Slider</h3>
		<v-divider class="pa-2" style="width: 50%" ></v-divider>
		<div style="width: 50em;">
			<vue-slider
				v-model="vueSliderValue"
				tooltip="always"
				:tooltip-formatter="formatter"
				:marks="marks"
				:min="20"
				:max="100">
			</vue-slider>
		</div><br><br>
		<div><a href="https://nightcatsama.github.io/vue-slider-component/#/" target="_blank" >Vue Slider</a></div><br>
		<div><a href="https://openbase.com/js/vue-slider-component/" target="_blank" >Components</a></div><br>
		<div><a href="https://jsfiddle.net/NightCatSama/2xy72dod/10547" target="_blank" >Tutorials</a></div><br>

		<h3>Custom Slider</h3>
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

		<h3>My Attempt</h3>
		<v-divider class="pa-8"></v-divider>
		<div>
			<div class="switch-box" v-on:click="toggleSwitch()" ref="switch-box">
				<div class="switch-button"></div>
				<div class="switch-text">email</div>
			</div>
		</div>

	</div>
</template>

<script>
import VueSlider from "vue-slider-component"
import 'vue-slider-component/theme/antd.css'
import CustomSlider from "vue-custom-range-slider";
import { ToggleButton } from 'vue-js-toggle-button'
import "vue-custom-range-slider/dist/vue-custom-range-slider.css";
import {format} from '../components/Common'
export default {
	mounted() {
		const sliderLabel = document.querySelectorAll(".slider__label")
		sliderLabel.forEach(elem => {
			elem.style.fontSize = '25px'
			elem.style.top = '-50px'
			elem.style.marginLeft = '12px'
		})
	},
	methods: {
		toggleSwitch() {
			let switchBox = this.$refs['switch-box']
			let switchText = switchBox.querySelector('.switch-text')
			let switchButton = switchBox.querySelector('.switch-button')

			if (switchBox.classList.contains('active')) {
				switchBox.classList.remove('active')
				switchText.classList.remove('active-text')
				switchButton.classList.remove('active-button')
			} else {
				switchBox.classList.add('active')
				switchText.classList.add('active-text')
				switchButton.classList.add('active-button')
			}
		}
	},
	data: () => {
		return {
			vueSliderValue: 50,
			marks: val => val % 10 === 0,
			formatter: val => {
				return format(val)
			},
			label: { checked: 'on', unchecked: 'off' },
			smsLabel: { checked: 'sms', unchecked: 'sms' },
			emailLabel: { checked: 'email', unchecked: 'email' },
			toggleButton: false,
			value: '200',
			sliderValue: '200',
		}
	},
	components: {
		VueSlider,
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


	.switch-box {
		display: grid;
		grid-auto-flow: column;
		padding: 3px 3px;
		box-shadow: 0 0 0 0;
		border-radius: 25px;
		width: 7.2em;
		height: 3.3em;
		color: white;
		font-weight: 450;
		background-color: rgb(191, 203, 217);
		opacity: 1;
	}
	.switch-text {
		text-align: center;
		margin: auto;
		font-size: 2.5ch;
		width: auto;
		order: 2;
	}
	.switch-button {
		background-color: white;
		width: 2.9em;
		height: 2.9em;
		border-radius: 50%;
		transition: transform 300ms ease 0s;
		order: 1;
	}
	.active {
		background-color: rgb(117, 199, 145);
	}
	.active-button {
		order: 2;
	}
	.active-text {
		order: 1;
	}
</style>