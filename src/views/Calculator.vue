<template>
	<div class="pa-3 pt-10" >
		<div class="calculator pa-3">
			<h1 class="pb-5" >Calculator</h1>
			<input class="num pa-2" type="text" v-model="message" value="message" readonly="readonly"/>
			<input class="num pa-2" type="number" v-model="number" value="number" readonly="readonly"/>
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
	</div>
</template>

<script>

export default {
	name: 'Calculator',
	data() {
		return {
			message: '',
			operations: [],
			number: 0,
			hasSum: false,
		}
	},
	methods: {
		clickNumBtn(num) {
			this.number = this.number === 0 ? parseInt(num) : parseInt(this.number + num.toString())
		},
		clickOperation(opr) {
			let opration = " "+ opr +" "
			this.message = this.operations.length === 0 ? this.number + opration : this.message + this.number + opration
			this.operations.push({ id: Date.now(), number: this.number, opr: opr })
			this.number = 0
		},
		calculate(first, second, operation) {
			let sum
			if (operation === '+') {
				sum = parseInt(first) + second
			} else if (operation === '-') {
				sum = parseInt(first) - second
			} else if (operation === '/') {
				sum = parseInt(first) / second
			} else if (operation === '*') {
				sum = parseInt(first) * second
			}
			return sum
		},
		equal() {
			let sum = 0
			if (this.operations.length === 1) {
				sum = this.calculate(this.operations[0].number, this.number, this.operations[0].opr)
			} else if (this.operations.length > 1) {
				for (let o in this.operations) {
					if (parseInt(o) === 0) {
						sum = this.calculate(this.operations[o].number, this.operations[parseInt(o)+1].number, this.operations[o].opr)
					} else if (parseInt(o)+1 === this.operations.length) {
						sum = this.calculate(sum, this.number, this.operations[o].opr)
					} else {
						sum = this.calculate(sum, this.operations[parseInt(o)+1].number, this.operations[o].opr)
					}
				}
			}
			this.message = this.message + this.number.toString() + ' = ' + sum
			this.number = 0
		},
		clear() {
			this.message = ''
			this.number = 0
			this.operations = []
		},
	}
}
</script>

<style>
	.calculator {
		border: 1px solid black;
		width: 500px;
	}
	.btn {
		border: 1px solid black;
		width: 100%;
		height: 100%;
	}
	.btn-func {
		width: 70%;
		height: 60px;
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