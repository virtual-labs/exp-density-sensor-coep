
function graph()		
{
			$("#btnForModal,#result,#simDemo").prop("hidden",true);
		$("#result").prop("hidden",false);
//		alert("GRAPH");
		$("#centerText1").html("Table & Graph (Standard frequency) ");
		$("#centerText2").html("Table & Graph (Actual frequency) ");
		table1();
		graph1();
		table2();
		graph2();
		
		
		
}
function table1()
{

	var tableMainDiv='<div class="well well-lg">'
		+'<table class="  table table-bordered "  style="overflow-x:auto;">'
			+ ' <thead>'

			+ '  <tr>'
			+ '  <th scope="col"><center>Service Type</center></th>'
			+ '   <th scope="col"><center >Vibration Cycle time T(&micro;s)</center></th>'
			+ '  <th scope="col"><center>Standard Frequency(Hz)</center></th>'
			+ '  <th scope="col"><center>Density(Kg/m&sup3;)</center></th>'
	
			+ '   </tr>'
			+ '  </thead>'
			+ '   <tbody>'
		for (var i = 0; i < masterJson.demo.length; i++) {
			tableMainDiv += '<tr>'
//            +' <td><center style="color:red;" >' +masterJson.demo[i].density + '</center></td>'
				+'   <td><center   > '+masterJson.demo[i].Servicetype+ '</center></td>'
				+' <td><center >' + masterJson.demo[i].T + '</center></td>'
				+' <td><center style="color:red;">' + masterJson.demo[i].frequency + '</center></td>'
				+' <td><center style="color:red;">' + masterJson.demo[i].density + '</center></td>'
				 + ' </tr>'
		}
		tableMainDiv += ' </tbody>'
			 + '  </table>'
//			 + ' </div>'
			$("#tableDesign").html(tableMainDiv); 

}
function table2()
{

	var tableMainDiv='<div class="well well-lg" style="margin-top: 30px;overflow-x:auto;">'
		+'<table class="  table table-bordered "  style="">'
			+ ' <thead>'

			+ '  <tr>'
			+ '  <th scope="col"><center>Service Type</center></th>'
			+ '   <th scope="col"><center >Vibration Cycle time T(&micro;s)</center></th>'
			+ '  <th scope="col"><center>Actual Frequency(Hz)</center></th>'
			+ '  <th scope="col"><center>Density(Kg/m&sup3;)</center></th>'
	
			+ '   </tr>'
			+ '  </thead>'
			+ '   <tbody>'
		for (var i = 0; i < masterJson1.demo.length; i++) {
			tableMainDiv += '<tr>'
//            +' <td><center style="color:red;" >' +masterJson.demo[i].density + '</center></td>'
				+'   <td><center  > '+masterJson1.demo[i].Servicetype+ '</center></td>'
				+' <td><center >' + masterJson1.demo[i].t1 + '</center></td>'
				+' <td><center style="color:red;">' + masterJson1.demo[i].frqWithError1 + '</center></td>'
				+' <td><center style="color:red;">' + masterJson1.demo[i].rahoDash + '</center></td>'
						
						 + ' </tr>'
		}
		tableMainDiv += ' </tbody>'
			 + '  </table>'
//			 + ' </div>'
			 $("#tableDesign2").html(tableMainDiv); 

}
function graph1()
{
	 // Data for liquids, density, and frequency
	
    const liquids = [];
    const densityData = []; // in kg/m³
    const frequencyData = []; // in Hz (example values)
    const colorName=[];
    
    
    
    
    for (var i = 0; i < masterJson.demo.length; i++) 
    {
    	liquids[i]=masterJson.demo[i].Servicetype;
    	densityData[i]=parseInt(masterJson.demo[i].frequency);
    	frequencyData[i]=parseInt(masterJson.demo[i].density);
    	if(liquids[i]=="Water")
    		{
    		colorName[i]="#74CCF4";
    		}
    	else if(liquids[i]=="Milk")
    		{
    		colorName[i]="#b3b8ba";
    		}
    	else if(liquids[i]=="Petrol")
		{
		colorName[i]="#e9e5be";
		}
    	else if(liquids[i]=="Diesel")
		{
		colorName[i]="#31456a";
		}
    	else if(liquids[i]=="Honey")
		{
		colorName[i]="#D1A745";
		}
    	
    }
    console.log(" liquids"+liquids);
    console.log(" densityData "+densityData);
    console.log(" frequencyData "+frequencyData);
    Highcharts.chart('graph1', {
		credits: { enabled: false},
        chart: {
            type: 'column',
            backgroundColor: '#f4f4f4',
            borderRadius: 10,
            borderColor: '#ccc',
            borderWidth: 1
        },
        title: {
            text: ' Density vs Frequency',
            style: {
                color: '#333',
                fontSize: '22px',
                fontWeight: 'bold'
            }
        },
        xAxis: {
            categories: liquids,
            title: {
                text: 'Liquids',
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    
                }
            },
            labels: {
                style: {
                    fontSize: '12px'
                }
            },
            lineColor: '#666',
            lineWidth: 1
        },
        yAxis: [{
            min: 0,
            title: {
                text: 'Density (kg/m&sup3;)',
                style: {
                    color: '#1a9bfc',
                    fontWeight: 'bold',
                    color:colorName
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: '#1a9bfc'
                }
            },
            opposite: false,
            gridLineColor: '#e6e6e6'
        }, {
            min: 0,
            title: {
                text: 'Frequency (Hz)',
                style: {
                    color: '#f45b5b',
                    fontWeight: 'bold'
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: '#f45b5b'
                }
            },
            opposite: true,
            gridLineWidth: 0
        }],
        series: [{
            name: 'Density (kg/m&sup3;)',
            data: densityData,
            color: '#1a9bfc',
            borderRadius: 5
        }, {
            name: 'Frequency (Hz)',
            data: frequencyData,
            color: '#f45b5b',
            borderRadius: 5,
            yAxis: 1
        }],
        tooltip: {
            shared: true,
            headerFormat: '<span style="font-size: 15px">{point.key}</span><br>',
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>'
        },
        plotOptions: {
            column: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: '#000'
                    }
                }
            }
        },
        legend: {
            backgroundColor: '#f4f4f4',
            borderColor: '#ddd',
            borderWidth: 1,
            itemStyle: {
                fontSize: '12px',
                fontWeight: 'bold'
            }
        }
    });
	
}
function graph2()
{
	 // Data for liquids, density, and frequency
	
    const liquids = [];
    const densityData = []; // in kg/m³
    const frequencyData = []; // in Hz (example values)
    const colorName=[];
    
    for (var i = 0; i < masterJson1.demo.length; i++) 
    {
    	liquids[i]=masterJson1.demo[i].Servicetype;
    	densityData[i]=parseInt(masterJson1.demo[i].frqWithError1);
    	frequencyData[i]=parseInt(masterJson1.demo[i].rahoDash);
//    	frequencyData[i]=temp.toFixed(3);
    	if(liquids[i]=="Water")
		{
		colorName[i]="#74CCF4";
		}
	else if(liquids[i]=="Milk")
		{
		colorName[i]="#b3b8ba";
		}
	else if(liquids[i]=="Petrol")
	{
	colorName[i]="#e9e5be";
	}
	else if(liquids[i]=="Diesel")
	{
	colorName[i]="#31456a";
	}
	else if(liquids[i]=="Honey")
	{
	colorName[i]="#D1A745";
	}
    	
    }
    console.log(" liquids"+liquids);
    console.log(" densityData "+densityData);
    console.log(" frequencyData "+frequencyData);
    Highcharts.chart('graphActual', {
		credits: { enabled: false},
        chart: {
            type: 'column',
            backgroundColor: '#f4f4f4',
            borderRadius: 10,
            borderColor: '#ccc',
            borderWidth: 1
        },
        title: {
            text: ' Density vs Frequency',
            style: {
                color: '#333',
                fontSize: '22px',
                fontWeight: 'bold'
            }
        },
        xAxis: {
            categories: liquids,
            title: {
                text: 'Liquids',
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color:colorName
                }
            },
            labels: {
                style: {
                    fontSize: '12px'
                }
            },
            lineColor: '#666',
            lineWidth: 1
        },
        yAxis: [{
            min: 0,
            title: {
                text: 'Density (kg/m&sup3;)',
                style: {
                    color: '#1a9bfc',
                    fontWeight: 'bold'
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: '#1a9bfc'
                }
            },
            opposite: false,
            gridLineColor: '#e6e6e6'
        }, {
            min: 0,
            title: {
                text: 'Frequency (Hz)',
                style: {
                    color: '#f45b5b',
                    fontWeight: 'bold'
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: '#f45b5b'
                }
            },
            opposite: true,
            gridLineWidth: 0
        }],
        series: [{
            name: 'Density (kg/m&sup3;)',
            data: densityData,
            color: '#1a9bfc',
            borderRadius: 5
        }, {
            name: 'Frequency (Hz)',
            data: frequencyData,
            color: '#f45b5b',
            borderRadius: 5,
            yAxis: 1
        }],
        tooltip: {
            shared: true,
            headerFormat: '<span style="font-size: 15px">{point.key}</span><br>',
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>'
        },
        plotOptions: {
            column: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: '#000'
                    }
                }
            }
        },
        legend: {
            backgroundColor: '#f4f4f4',
            borderColor: '#ddd',
            borderWidth: 1,
            itemStyle: {
                fontSize: '12px',
                fontWeight: 'bold'
            }
        }
    });
	
}