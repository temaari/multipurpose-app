<template>
	<div class="calculator pa-3">
		<h1>Calculator</h1>
		<input class="num pa-2" type="text" v-model="message" value="message"/>
		<br><br>
		<div class="pa-2" v-for="num in 10" :key="num" >
			<button :id="num-1" class="btn" @click="clickNumBtn(num-1)" >{{ num-1 }}</button>
		</div>
		<div class="pa-3">
			<button class="btn btn-func" @click="add()" >+</button>
			<button class="btn btn-func" @click="subtract()" >-</button>
			<button class="btn btn-func" @click="divide()" >/</button>
			<button class="btn btn-func" @click="multiple()" >x</button>
			<button class="btn btn-func" @click="equal()" >=</button>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Calculator',
	data() {
		return {
			message: '0',
			numberLeft: 0,
			numberRight: 0,
			sum: 0,
			isOperation: false,
			opr: '',
		}
	},
	methods: {
		clickNumBtn(num) {
			if (!this.isOperation) {
				this.numberLeft = this.numberLeft === 0 ? num : parseInt(this.numberLeft + num.toString())
				this.message = this.message === '0' ? num : this.message + num.toString()
			} else {
				this.numberRight = this.numberRight === 0 ? num : parseInt(this.numberRight + num.toString())
				this.message = this.message === '0' ? this.message + this.opr + num : this.numberLeft.toString() + this.opr + this.numberRight.toString()
			}
		},
		add() {
			this.isOperation = true
			this.opr = "+"
		},
		equal() {
			let sum = this.numberLeft + this.numberRight
			console.log(this.numberLeft.toString(), "+", this.numberRight.toString(), "=", sum.toString())
			this.message = sum.toString()
			this.isOperation = false
			this.numberLeft = 0
			this.numberRight = 0
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
		width: 15%;
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