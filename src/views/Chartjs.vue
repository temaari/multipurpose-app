<template>
	<div class="pa-8">
		<div style="width: 40em;">
			<canvas id="canvas"></canvas>
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			usageChart: null
		}
	},
	methods: {
		update() {
			this.removeChartData()
			this.usageChart.data.labels.push("September")

			var newDataset = {
				backgroundColor: "#839098",
				label: "Hot Water",
				borderColor: "#ffffff",
				data: [],
				fill: false,
			}

			newDataset.data.push(0.0032)
			// newDataset.data.push({
			// 	x: "1 Sep",
			// 	y: 0.0032,
			// 	extraInfo: "2020-09-01T00:00:00"
			// })

			this.usageChart.data.datasets.push(newDataset)

			this.usageChart.update();
		},
		removeChartData() {
			if (this.usageChart != null) this.usageChart.destroy()
			this.configChart()
		},
		configChart() {
			var config = {
				type: 'bar',
				data: {
					labels: [],
					datasets: []
				},
				options: {
					responsive: true,
					title: {
						display: false
					},
					tooltips: {
						mode: "index",
						intersect: false,
						callbacks: {
							label: function (tooltipItem, data) {
								var dtinfo = data.datasets[tooltipItem.datasetIndex];

								if (dtinfo.label == "Weather") {
									var valuedata = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
									return "Temperature " + valuedata.extraInfo + " degree";
								} else {
									return ( dtinfo.label + " " + Number(tooltipItem.yLabel) + "kL" );
								}
							}
						}
					},
					hover: {
						mode: "nearest",
						intersect: true
					},
					scales: {
						xAxes: [
							{
								stacked: true,
								display: true,
								scaleLabel: {
									display: false
								}
							}
						],
						yAxes: [
							{
								stacked: true,
								display: true,
								scaleLabel: {
									display: true,
									labelString: "Consumption kL"
								},
								ticks: {
									suggestedMin: 0
								}
							}
						]
					}
				}
			}
			var ctx = document.getElementById('canvas').getContext('2d');
			this.usageChart = new Chart(ctx, config);
		}
	},
	mounted() {
		this.update()
	},
}
</script>

<style>
</style>