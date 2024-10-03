
function graph()		
{
	var xdata=[];
	var ydata=[];
	var graphData1=[];
	for (var i = 0; i < masterJson.demo.length; i++)
	 {
		xdata[i] = masterJson.demo[i].frequency;
		ydata[i] = masterJson.demo[i].rahoDash;
		name[i]=masterJson.demo[i].materialType;
		
	}
	for (var j = 0; j < masterJson.demo.length; j++) {
			tempArr = [];
			tempArr[0] = parseFloat(xdata[j]);
			tempArr[1] = parseFloat(ydata[j]);
			graphData1.push(tempArr);

	}
		console.log("xdata "+xdata);
		console.log("ydata "+ydata);
		console.log("graphData1 "+graphData1);
		ydata.sort(function(a, b) { return a - b });
		xdata.sort(function(a, b) { return a - b });
		
		console.log("After xdata "+xdata);
		console.log("After ydata "+ydata);
		
		Xmax = parseFloat(xdata[xdata.length - 1]);
		Ymax = parseFloat(ydata[ydata.length - 1]);
		
		console.log("Xmax "+Xmax);
		console.log("Ymax "+Ymax);
		Xmin = parseFloat(xdata[0]);
		Ymin= parseFloat(ydata[0]);

		Highcharts.chart('canvas-div', {
			title: {
				text: 'Frequency v/s Density '
			},
//			subtitle: {
//				text: 'Meter Constant is  pulses (per/ltr)'
//			},
			xAxis: {
				Xmin: 0,
				Xmax: 3500,
				
				title: {
					text: 'Frequency (Hz)'
					
				},
				labels: {
		            format: '{value} '
		        },
			
			},
			yAxis:
			{
				Ymin: 0,
				Ymax: 1500,
				title: {
					text: 'Density ( Kg/m&sup3;)'
				},
				labels: {
		            format: '{value}'
		        },
			},
			
//			 tooltip: {
//			        headerFormat: '<b>{series.name}</b><br/>',
//			        pointFormat: ''
//			    },
			    tooltip: {
			        formatter: function() {
			            return '  <b> Frequency (Hz):'  + this.x + '</b> <br> <b> Density (&#120588;)  :' + this.y + '</b> ';
			        }
			    },
			series: [
//				{
//					type: 'line',
//					name: 'Standard value',
//					data: [[Xmin, Ymin], [Xmax, Ymax]],
//					marker: {
//						enabled: false
//					},
//					states: {
//						hover: {
//							lineWidth: 0
//						}
//					},
//					enableMouseTracking: false
//				},
				
				{
					type: 'scatter',
					name: name,

					data: graphData1,
					marker: {
						radius: 4
					}
				}
				]

		});
	
				
		
}