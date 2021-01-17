<template>
	<div class="calculator pa-3">
		<h1>Calculator</h1>
		<input class="num pa-2" type="text" v-model="message" value="message"/>
		<input class="num pa-2" type="number" v-model="number" value="number"/>
		<br><br>
		<div class="btn-num pa-2" v-for="num in 10" :key="num" >
			<button v-if="num === 10" :id="num-1" class="btn pa-1" @click="clickNumBtn(0)" >0</button>
			<button v-else :id="num-1" class="btn pa-1" @click="clickNumBtn(num)" >{{ num }}</button>
		</div>
		<div class="pa-3">
			<div class="btn-num pa-2" ><button class="btn btn-func" @click="clickOperation('+')" >+</button></div>
			<div class="btn-num pa-2" ><button class="btn btn-func" @click="clickOperation('/')" >/</button></div>
			<div class="btn-num pa-2" ><button class="btn btn-func" @click="clear()" >C</button></div>
			<div class="btn-num pa-2" ><button class="btn btn-func" @click="clickOperation('-')" >-</button></div>
			<div class="btn-num pa-2" ><button class="btn btn-func" @click="clickOperation('*')" >x</button></div>
			<div class="btn-num pa-2" ><button class="btn btn-func" @click="equal()" >=</button></div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Calculator',
	data() {
		return {
			message: '',
			number: 0,
			numberLeft: 0,
			sum: 0,
			isOperating: false,
			opr: '',
		}
	},
	methods: {
		clickNumBtn(num) {
			this.number = this.number === 0 ? num : this.number + num.toString()
		},
		clickOperation(opr) {
			this.opr = " "+ opr +" "
			if (!this.isOperating) {
				this.isOperating = true
				this.numberLeft = this.number
				this.message = this.numberLeft + this.opr
				this.number = 0
			} else {
				this.message = this.message + this.number + this.opr
				this.number = 0
			}
		},
		equal() {
			if (this.opr === ' + ') {
				this.sum = parseInt(this.numberLeft) + this.number
			} else if (this.opr === ' - ') {
				this.sum = parseInt(this.numberLeft) - this.number
			} else if (this.opr === ' / ') {
				this.sum = parseInt(this.numberLeft) / this.number
			} else if (this.opr === ' * ') {
				this.sum = parseInt(this.numberLeft) * this.number
			}
			this.message = this.numberLeft + this.opr + this.number + " = " + this.sum.toString()
			this.isOperating = false
			this.opr = ''
			this.numberLeft = 0
			this.number = 0
		},
		clear() {
			this.message = ''
			this.number = 0
			this.numberLeft = 0
			this.sum = 0
			this.isOperating = false
			this.opr = ''
		},
	}
}
</script>

<style>
	.btn {
		border: 1px solid black;
		width: 100%;
		height: 100%;
	}
	.btn-func {
		width: 100px;
	}
	.btn-num {
		width: 30%;
		display: inline-block;
	}
	.num {
		text-align: right;
		border: 1px solid black;
		width: 100%;
		height: 100%;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
}

</style>