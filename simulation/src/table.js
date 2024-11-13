
function tableCreate(masterJson)		
{
			$("#ans1,#ans3").val("");
			$("#densityName").html("");
			$("#btnAnsCheck2,#btnAnsCheck3,#ans1,#ans3").prop("disabled",false);
			$("#materialSelection").prop("disabled",false);
			var tableMainDiv='<div class="well well-lg">'
				+'<table class="  table table-bordered "  style="overflow-x:auto;">'
					+ ' <thead>'

					+ '  <tr>'
					+ '  <th scope="col"><center>Service Type</center></th>'
					+ '  <th scope="col"><center>Density(Kg/m&sup3;)</center></th>'
//					+ '   <th scope="col"><center >density(Kg/m&sup3;)</center></th>'
					+ '   <th scope="col"><center >Vibration Cycle time T(&micro;s)</center></th>'
					+ '  <th scope="col"><center>Frequency(Hz)</center></th>'
				
					
				
					
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
				for (var i = 0; i < masterJson.demo.length; i++) {
					tableMainDiv += '<tr>'

								
//								+' <td><center style="color:red;" >' +masterJson.demo[i].density + '</center></td>'
						+'   <td><center > '+masterJson.demo[i].Servicetype+ '</center></td>'
						+' <td><center >' + masterJson.demo[i].density + '</center></td>'
						+' <td><center style="color:red;">' + masterJson.demo[i].T + '</center></td>'
								+' <td><center style="color:red;">' + masterJson.demo[i].calcuatefrq + '</center></td>'
								
								
								
								
						        + ' </tr>'
				}
				tableMainDiv += ' </tbody>'
					 + '  </table>'
//					 + ' </div>'
	
				$("#tableDesign").html(tableMainDiv);
				$("#materialSelection").prop("disabled",false);
				
				if(masterJson.demo.length==5)
					{
					var htm='<div class="row">'
						+'<div class="col-sm-12">'
						+'<button type="button" style="padding: 10px;"  class="btn btn-danger btnStyle"   id="nextLevel"  ><b>GO TO NEXT LEVEL</b></button>'
						  
						+'</div>'
						+'</div>'
					$("#tableDesign").append(htm);
					$("#modelBody").css("color", "#683d3d");
					 $("#msgName").html("Message Box");
					 $("#materialSelection").prop("disabled",true);
					$("#modelBody").html("<b class='boldTextblue'>GO TO NEXT LEVEL</b>");
					
					}
				$("#nextLevel").click(function(){
					
				$("#main-div-conf,#canvas-div,#canvas-div1,#tableDesign").html("");
				
				mainPage1();
				});

				

}