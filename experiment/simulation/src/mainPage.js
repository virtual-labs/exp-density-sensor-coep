	arrayJson=[];
masterJson={};
materialValue1=0;	
var density=0;
var frequency=0;
var T=0;
var rahoDash=0;
var materialName="";
var AttemptCounterT=1;
var AttemptCounterF=1;
////mainpage function
 function mainPage(){
	 var color;
	var tableTunning=''
	
	  +'<div class="row" >'
	   +'<center style="font-size: 20px;font-weight: normal;margin-left:15px;color:#621b1b;"><b>Tuning fork design parameters</b></center>'
	  +'</div>'
	  +'<br>'
		+'<div class="row" >'
		
		 +'<div class="col-sm-12"  >'
		 +'<table class="table table-bordered">'
		 +'<tr>'
		 
		 +'<th><center><h4><b><i>&empty;</i></b></h4></center></th>'
		 +'<th><center><h4><b><i>b</i></b></h4></center></th>'
		 +'<th><center><h4><b><i>l</i></b></h4></center></th>'
		 +'<th><center><h4><b><i>L</i></b></h4></center></th>'
		 
		  +'</tr>'
		   +'<tr>'
		 
		  
		 +'<th><center>20.00mm</center></th>'
		 +'<th><center>13.00mm</center></th>'
		 +'<th><center>25.50mm</center></th>'
		 +'<th><center>32.00mm</center></th>'
		 
		  +'</tr>'
		 +'</table>'
		   +'</div>'
		   
	   
	   +'</div>'
	   $("#tableTunning").html(tableTunning);
	   var htm=''
	   +'<div class="row" >'
	   +'<center style="font-size: 20px;font-weight: normal;margin-left:15px;color:#621b1b;"><b>Sensor Coefficients</b></center>'
	  +'</div>'
	  +'<br>'
	  +'<div class="row" style="border: 5px solid #621b1b;padding: 9px;margin: 1px;">'
		 
	   +'<div class="col-sm-4"  >'
	   +'<img src="images/m0.png" class="img-responsive"></img>'
	   +'</div>'
	   +'<div class="col-sm-4" >'
	   +'<img src="images/m1.PNG" class="img-responsive"></img>'
	   +'</div>'
	   +'<div class="col-sm-4" >'
	   +'<img src="images/m2.PNG" class="img-responsive"></img>'
	   +'</div>'
	   +'</div>'
	  
	    
	   +'<br>'
		+'<div class="row" >'
		
		 +'<div class="col-sm-12"  >'
		 +'<center ><b style="font-size: 30px;font-weight: normal;margin-left:15px;color:#621b1b;">Temperature - 20&deg;C </b></center>'
		   +'</div>'
		   
	   
	   +'</div>'
	   +'<br>'
		
	   
		+'<div class="row">'
	   +'<div class="col-sm-6" id="labelMaterial" >'
	 +'<b style="font-size: 20px;font-weight: normal;margin-left:15px;color:#621b1b;">Select liquid service</b>'
		
	   +'</div>'
	   
	   +'<div class="col-sm-6" id="materialSelection1" >'

	   +'<select  class="form-control selectConf"  id="materialSelection" style="height:auto;"  >'
	   +'<option value="-1">--- Select Service --- </option>'
	   +'<option value="0" id="0" >Water  </option>'
	   +'<option value="1" id="1">Milk </option>'
	   +'<option value="2" id="2">Petrol  </option>'
	   +'<option value="3" id="3">Diesel  </option>'
	   +'<option value="4" id="4">Honey </option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	    +'<br>'
	    // value 0 Water
		// value 1 Milk	  
		// value 2 Petrol
		// value 3 Disel
	    +'<div class="row"  style=" margin-bottom: 10px;">'
	    +'<div class="col-sm-6" >'
		 
		   +'</div>'
		   +'<div class="col-sm-6" id="densityDiv" hidden>'
		   +'<b style="font-size: 15px;font-weight: normal;margin-left:15px;color:#621b1b;margin-bottom:5px;" id="densityName"> Density of Selected liquid service : </b>'
		   +'</div>'
		  +'</div>'
		    
	   +'<div class="row"  >'
	   +'<div class="col-sm-12" id="mimicbtnquesAns" hidden>'
	 +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" data-toggle="modal" data-target="#myModal"  id="checkConfg"  ><b>CALCULATION</b></button>'
	   
	      +'</div>'
	      +'</div>' 
	      + '<div class="row"  id="CalculateActualFlow2" hidden>'
	         +'<div class="col-sm-5">'
	         +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate Vibration Cycle time (T) &micro;s : </label>'
	         +'</div>'
	         +'<div class="col-sm-4">'
	         +'<input type="text" id="ans1" value="" style=margin:15px 10px;width:100%;"  class=" form-control" />'
	         +'</div>'
	         +'<div class="col-sm-3">'
	         +'<br><button type="submit" class="btn btn-danger" id="btnAnsCheck2" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
	         +'</div>'
	         +'</div>'
	         + '<div class="row"  id="CalculateActualFlow3" hidden>'
	         +'<div class="col-sm-5">'
	         +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate frequency (Hz)  : </label>'
	         +'</div>'
	         +'<div class="col-sm-4">'
	         +'<input type="text" id="ans3" value="" style=margin:15px 10px;width:100%;"  class=" form-control" />'
	         +'</div>'
	         +'<div class="col-sm-3">'
	         +'<br><button type="submit" class="btn btn-danger" id="btnAnsCheck3" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
	         +'</div>'
	         +'</div>'
	         +'<div class="row"  id="CalculateActualFlow1" hidden>'
	         +'<div class="col-sm-5">'
	         +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate rho( &#120588; )kg/m<sup>3</sup>  : </label>'
	         +'</div>'
	         +'<div class="col-sm-4">'
	         +'<input type="text" id="ans" value="" style=margin:15px 10px;width:100%;"  class=" form-control" />'
	         +'</div>'
	         +'<div class="col-sm-3">'
	         +'<br><button type="submit" class="btn btn-danger" id="btnAnsCheck1" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
	         +'</div>'
	         +'</div>'
	         

	         
	         + ' <!-- Modal -->'
	    		+ '<div class="modal fade" id="myModal" role="dialog">'
	    		+ ' <div class="modal-dialog modal-md">'
	    		+ '    <div class="modal-content">'
	    		+ '     <div class="modal-header">'
	    		
	    		+ '       <h4 class="modal-title" id="msgName">Message box</h4>'
	    		+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
	    		+ '     </div>'
	    		+ '     <div class="modal-body" id="modelBody">'
//	    		+ '       <p id="modelMsg">This is a small modal.</p>'
	    		+ '     </div>'
	    		+ '     <div class="modal-footer">'
	    		+ '       <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
	    		+ '     </div>'
	    		+ '   </div>'
	    		+ ' </div>'
	    		+ '</div>'
	    		//model Close
	    		
			 $("#centerText1").html("CONFIGURATION");
	      $("#main-div-conf").html(htm);
	
	$("#materialSelection").change(function(){
		
		
		materialValue=$("#materialSelection").children(":selected").attr("value");
		 $('#materialSelection option[value="'+materialValue+'"]').prop('disabled', true);
		 $('#materialSelection').prop('disabled', true);
		 $('#materialSelection option[value="'+materialValue+'"]').css('background-color','#cbbdbd');
		 if(materialValue==0)
			 {
			    materialName="Water";
				color="#74CCF4";
			 	density="1000";
				  frequency="2727";
				  T="366.645";
				  rahoDash="998.003";
				  $("#densityDiv,#CalculateActualFlow2").prop("hidden",false);
					$("#densityName").html("Density of Selected liquid service : "+density+" (kg/m<sup>3</sup>)");
				  
			 }
		 else  if(materialValue==1)
		 {
			 	color="#b3b8ba";
			 	density="1033";
				  frequency="2714";
				  T="368.448";
				  rahoDash="1032";
				  materialName="Milk";
					$("#densityDiv,#CalculateActualFlow2").prop("hidden",false);
					$("#densityName").html("Density of Selected liquid service : "+density+" (kg/m<sup>3</sup>)");
					
					
					
			 }
		 else  if(materialValue==2)
		 {
			 	color="#e9e5be";
			 	density="730";
				  frequency="2841";
				  T="351.989";
				  rahoDash="729.99125";
				  materialName="Petrol";
				  $("#densityDiv,#CalculateActualFlow2").prop("hidden",false);
					$("#densityName").html("Density of Selected liquid service : "+density+" (kg/m<sup>3</sup>)");
				  
				  
			 }
		 else  if(materialValue==3)
		 {
			 	color="#31456a";
			 	density="830";
				  frequency="2794";
				  T="357.861";
				  rahoDash="830";
				  materialName="Diesel";
				  $("#densityDiv,#CalculateActualFlow2").prop("hidden",false);
					$("#densityName").html("Density of Selected liquid service : "+density+" (kg/m<sup>3</sup>)");
				  
			 }
		 else  if(materialValue==4)
		 {
			 	color="#D1A745";
			 	density="1400";
				  frequency="2585";
				  T="386.844";
				  rahoDash="1399.990";
				  materialName="Honey";
				  $("#densityDiv,#CalculateActualFlow2").prop("hidden",false);
					$("#densityName").html("Density of Selected liquid service : "+density+" (kg/m<sup>3</sup>)");
				  
			 }else{
				
				 $("#CalculateActualFlow2").prop("hidden",true);
				 $("#densityDiv").prop("hidden",false);
					$("#densityName").html("<b style='font-size: 17px;color: red;font-weight: bolder;'>Select liquid service.</b>");
					$("#materialSelection").prop("disabled", false);
			 }
		 

		
	});
	$("#checkConfg").click(function(){
		materialValue=$("#materialSelection").children(":selected").attr("value");
		if(materialValue=="-1"){
			$("#modelBody").html("<b style='font-size: 17px;color: red;font-weight: bolder;'>Select liquid service.</b>");
		}
		else
			{
			
			$("#materialSelection").prop("disabled", true);
			$("#selectFlow").prop("disabled", true);
			$("#ans1").val(" ");
			$("#ans").val(" ");
			   materialValue1 =$("#materialSelection").children(":selected").attr("value");
			   console.log("gfh" +materialValue1);
			   materialSelection2=$("#materialSelection").children(":selected").attr("id");
			   $("#materialSelection option[id="+materialSelection2+"]").attr("disabled",true);
			   $("#ans,#btnAnsCheck1,#ans1,#btnAnsCheck2").prop("disabled", false);
			 //  mimic(color,frequency,density);
			   $("#modelBody").html("<b style='font-size: 17px;color: red;font-weight: bolder;'>Select Next liquid service.</b>");
//			   addToMasterJson();
//				tableCreate(masterJson);
			}   
		   
	   });
	
	
	  var id=0;
	  $('#btnAnsCheck2').click(function(){
		  $("#modelBody").css("font-size", "20px");
		  // value 0 Water
			// value 1 Milk	  
			// value 2 Petrol
			// value 3 Disel
		  $("body").css("padding","0px 0px 0px 0px");
		  console.log("T "+T);
		  flow = $("#ans1").val();
		  if(flow=="" || isAlphabetical(flow)){
//			alert("Enter numeric value ");
			  $("#modelBody").css("color", "red");
			  $("#msgName").html("Message Box");
			$("#modelBody").html("<b class='boldTextblue'>Enter numeric value</b> ");
			
		}
		else
			{
				if (id <= 3) {
					if (T == flow) {
					
						
						 $("#modelBody").css("color", "#621b1b");
						$("#msgName").html("Message Box");
						$("#modelBody").html("<b class='boldTextblue'>Calculate frequency(Hz) </b>");
						$("#CalculateActualFlow3").prop("hidden", false);
						
						
//						addToMasterJson();
						
						$("#ans1,#btnAnsCheck2").prop("disabled", true);
						
						id=0;
						
					} else if (T != flow) {
						 $("#modelBody").css("color", "red");
					$("#msgName").html("Message Box");
					$("#modelBody").html("<b class='boldTextRed'>Entered value is incorrect.Try it again.</b>");
					AttemptCounterT++;
					}


				} else if (id == 4) {
					AttemptCounterT++;
					 $("#modelBody").css("color", "#621b1b");
					$("#msgName").html("Formula");
					$("#modelBody").html("<img class='img-responsive' src='images/qe.png'></img> ");
					
					
				} else {
					flow = $("#ans1").val();

					if (T == flow) {
						id=0;
					    $("#ans1,#btnAnsCheck2").prop("disabled", true);
						$("#msgName").html("Message Box");
						 $("#modelBody").css("color", "#621b1b");
						 $("#modelBody").html("<b class='boldTextblue'>Calculate frequency(Hz) </b>");
							$("#CalculateActualFlow3").prop("hidden", false);
//						addToMasterJson();
//						tableCreate(masterJson);
						
						
					} else {
						AttemptCounterT++;
//						alert("correct answer is " + flow );
						 $("#modelBody").css("color", "green");
						 $("#msgName").html("Message Box");
						$("#modelBody").html("<b class='boldTextblue'>Correct answer is " + T+'</b>');
					}
				}
				id++;
	
			} 
	  });
	  var id=0;
	  var calFrq=0;
	  $('#btnAnsCheck3').click(function(){
		  $("#modelBody").css("font-size", "20px");
		  
		  $("body").css("padding","0px 0px 0px 0px");
//		  var temp=Math.pow(10, -6);
		 finalAns1=(1/(T*(Math.pow(10, -6))));
		 finalAns=parseInt(finalAns1.toFixed(2));
		 console.log("finalAns "+finalAns);
		  flow = $("#ans3").val();
		  if(flow==""|| isAlphabetical(flow) ){
//			alert("Enter numeric value ");
			  $("#modelBody").css("color", "red");
			  $("#msgName").html("Message Box");
			$("#modelBody").html("<b class='boldTextblue'>Enter numeric value.</b> ");
			
		}
		else
			{
				if (id <= 3) {
					if ( finalAns == flow) {
						id=0;
						
						$("#ans3,#btnAnsCheck3").prop("disabled", true);
						 $("#modelBody").css("color", "#621b1b");
						 $("#CalculateActualFlow2,#CalculateActualFlow3").prop("hidden", true);
						$("#msgName").html("Message Box");
						$("#modelBody").html("<b class='boldTextblue'>Select another liquid service. </b>");
						calFrq=finalAns;
						addToMasterJson();
						tableCreate(masterJson);
					
					} else if (finalAns != flow) {
						 $("#modelBody").css("color", "red");
					$("#msgName").html("Message Box");
					$("#modelBody").html("<b class='boldTextRed'>Entered value is incorrect.Try it again.</b>");
					AttemptCounterF++;
					}


				} else if (id == 4) {
					 $("#modelBody").css("color", "#621b1b");
					$("#msgName").html("Formula");
					$("#modelBody").html("<img class='img-responsive' src='images/fformula.png'></img><br><b style='color:red;'>Calculated frequency is rounded to next higher digit.</b> ");
					
					
				} else {
					flow = $("#ans3").val();

					if (finalAns == flow) {
						
						id=0;
						calFrq=finalAns;
						$("#ans3,#btnAnsCheck3").prop("disabled", true);
						$("#CalculateActualFlow2,#CalculateActualFlow3").prop("hidden", true);
						$("#msgName").html("Message Box");
						$("#modelBody").css("color", "#621b1b");
						$("#modelBody").html("<b class='boldTextblue'>Select another liquid service.</b>");
						addToMasterJson();
						tableCreate(masterJson);
						
						
					} else {
						AttemptCounterF++;
//						alert("correct answer is " + flow );
						 $("#modelBody").css("color", "green");
						 $("#msgName").html("Message Box");
						$("#modelBody").html("<b class='boldTextblue'>Correct answer is " + finalAns+'</b>');
					}
				}
				id++;
	
			} 
	  });

		function addToMasterJson()
		  {
			  tempJson={};	
				tempJson.Servicetype=materialName;
				tempJson.density = density;
				tempJson.frequency = frequency;
				tempJson.T = T;
				tempJson.calcuatefrq=calFrq;
				tempJson.rahoDash = rahoDash;
				arrayJson.push(tempJson);
				masterJson.demo = arrayJson;
				console.log(masterJson);
				
				resultMasterJson.cogAttemptCounterF=AttemptCounterF;
				resultMasterJson.cogAttemptCounterT=AttemptCounterT;
				console.log(resultMasterJson);
				
		  }
	  
}
