<template>
	<div class="pa-3">
		<h1>Convert CSV to JSON</h1>
		<v-divider class="pa-2" ></v-divider>
		<div>
			<textarea id="csv" type="text" style="border: 1px solid black; width: 50%; height: 200px; position:absolute;" @input="getText()" placeholder="name,age"></textarea>
		</div><br><br><br><br><br><br><br><br><br><br>
		<button @click="convertCsvToJson(file)">Convert {{ file }} CSV to JSON</button>
		<div><p id="json"></p></div>
	</div>
</template>

<script>
	export default {
		data: () => {
			return {
				file: "name,age\n"
					+ "Christian,25\n"
					+ "Briana,20\n"
					+ "Bobby,21\n"
					+ "Mando,50\n"
					+ "Luke,400",
				data: [],
			}
		},
		methods: {
			getText() {
				this.convertCsvToJson(document.getElementById('csv').value)
			},
			convertCsvToJson(input) {
				this.data = []

				let rows = input.split('\n')
				rows.forEach((row, count) => {
					if (count > 0)
						this.data.push({ "name": row.split(',')[0], "age": row.split(',')[1] }) 
				})

				let jsonText = "["
				this.data.forEach((el, count) => {
					jsonText = jsonText + "\n{\n \"name\": " + "\"" + el['name'] + "\"" + ","
					jsonText = jsonText + "\n \"age\": " + el['age'] + "\n}"
					if (count !== this.data.length-1) {
						jsonText = jsonText + ","
					}
				})
				jsonText = jsonText + "\n]"
				document.getElementById('json').innerText = jsonText
			},
		},
	}
</script>

<style>

</style>