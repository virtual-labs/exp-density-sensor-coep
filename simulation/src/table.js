
function tableCreate(masterJson)		
{

			var tableMainDiv='<div class="well well-lg">'
				+'<table class="  table table-bordered "  style="overflow-x:auto;">'
					+ ' <thead>'

					+ '  <tr>'
					
//					+ '   <th scope="col"><center >density(Kg/m&sup3;)</center></th>'
					+ '  <th scope="col"><center>Frequency(Hz)</center></th>'
					+ '   <th scope="col"><center >T(&micro;s)</center></th>'
					+ '  <th scope="col"><center>&#120588;(Kg/m&sup3;)</center></th>'
					+ '  <th scope="col"><center>Service Type</center></th>'
					
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0; i < masterJson.demo.length; i++) {
					tableMainDiv += '<tr>'

								
//								+' <td><center style="color:red;" >' +masterJson.demo[i].density + '</center></td>'
								+' <td><center >' + masterJson.demo[i].frequency + '</center></td>'
								+' <td><center style="color:red;">' + masterJson.demo[i].T + '</center></td>'
								+' <td><center style="color:red;">' + masterJson.demo[i].rahoDash + '</center></td>'
								+'   <td><center style="color:red;"> '+masterJson.demo[i].Servicetype+ '</center></td>'
								
						        + ' </tr>'
				}
				tableMainDiv += ' </tbody>'
					 + '  </table>'
//					 + ' </div>'
	
				$("#tableDesign").html(tableMainDiv);

				if(masterJson.demo.length==5)
					{
//					$("#modelBody").html("finish");
				//	alert("finish");
					$("#modelBody").html('');
					$("#modelBody").html('<img src="images/cong.gif" class="img-fluid" > ');
					$("#checkConfg").prop('disabled',true);
					
					$("#materialSelection").prop('disabled',true);
					$("#selectFlow").prop('disabled',true);
					$("#centerText2").html('GRAPH');
					graph();
					$("#canvas-div1").html("<img src='images/prototype.png'>");
					
					}

				

}