<template>
	<div class="pa-16">
		<h1>Convert CSV to JSON</h1>
		<v-divider class="pa-2" ></v-divider>
		<div>
			<button @click="defaultData(file)">Convert Default CSV to JSON</button>
			<button @click="clear()">Clear</button>
		</div>
		<v-divider class="pa-16" ></v-divider>
		<div class="text">
			<textarea
				id="csv" type="text" @input="getText()"
				:placeholder="'header1,header2,etc \nparam1,param2,etc'">
			</textarea>
		</div>
		<div class="result"><p id="json"></p></div>
	</div>
</template>

<script>
	export default {
		data: () => {
			return {
				file: "name,age,gender\n"
					+ "Christian,25.5,M\n"
					+ "Briana,20,F\n"
					+ "Bobby,21,M\n"
					+ "Mando,50,M\n"
					+ "Luke,400,M",
			}
		},
		methods: {
			clear() {
				document.getElementById('json').innerText = null
			},
			getText() {
				document.getElementById('json').innerText = this.convertCsvToJson(document.getElementById('csv').value)
			},
			defaultData(data) {
				document.getElementById('json').innerText = this.convertCsvToJson(data)
			},
			convertCsvToJson(input) {
				let rows = input.split('\n')

				let jsonText = "["
				rows.forEach((row, count) => {
					if (count > 0) {
						jsonText = jsonText + "\n \f {"

						row.split(',').forEach((param, i) => {
							jsonText = jsonText + "\n \f \f \""
							jsonText = jsonText + rows[0].split(',')[i]
							jsonText = jsonText + "\": "
							jsonText = jsonText + (Number.isInteger(parseInt(param)) ? param : "\"" + param + "\"")
							if (i !== row.split(',').length-1)
								jsonText = jsonText + ","
						})

						jsonText = jsonText + "\n \f }"
						if (count !== rows.length-1)
							jsonText = jsonText + ","
					}
				})
				jsonText = jsonText + "\n]"


				return jsonText
			},
		},
	}
</script>

<style scoped>
	button {
		border: 1px solid black;
		width: 100%;
		height: 40px;
		background: green;
		color: black;
		margin-bottom: 10px;
	}
	textarea {
		width: 100%;
		height: 100%;
		padding:2px;
		resize: none;
	}
	#json {
		height: auto;
	}
	.text {
		width: 48%;
		height: 200px;
		float: left;
		left: 0;
		padding-right: 10px;
		border: 1px dotted black;
	}
	.result {
		width: 51%;
		height: auto;
		float: right;
		right: 0;
		padding-left: 10px;
		border: 1px dotted black;
	}
</style>