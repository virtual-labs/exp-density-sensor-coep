	arrayJson=[];
masterJson={};
materialValue1=0;	
var density=0;
var frequency=0;
var materialName="";
////mainpage function
 function mainPage (){
	 var color;
	var htm='<div class="row">'
	   +'<div class="col-sm-6" id="labelMaterial" >'
	   +'<label class="labelstyle">Select Service </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6" id="materialSelection1" >'

	   +'<select  class="form-control selectConf"  id="materialSelection" style="height:auto;"  >'
	   +'<option value="-1">--- Select Service --- </option>'
	   +'<option value="0" id="0" >liquid 1  </option>'
	   +'<option value="1" id="1">liquid 2 </option>'
	   +'<option value="2" id="2">liquid 3  </option>'
	   +'<option value="3" id="3">liquid 4  </option>'
	   +'<option value="4" id="4">liquid 5 </option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	    +'<br>'
	    // value 0 Water
		// value 1 Milk	  
		// value 2 Petrol
		// value 3 Disel
	  +'<div class="row">'
		   +'<div class="col-sm-6" id="labelMaterial" >'
		   +'<label class="labelstyle">Select Flow(liter/sec) </label>'
		   +'</div>'
		   
		   +'<div class="col-sm-6" id="" >'

		   +'<select  class="form-control selectConf"  id="selectFlow" style="height:auto;"  >'
		   +'<option value="-1">--- Select Flow  --- </option>'
		   +'<option value="10" >10  </option>'
		   +'<option value="20" >20</option>'
		   +'<option value="30">30</option>'
		   +'<option value="40" >40</option>'
		   +'<option value="50" >50</option>'
		   +'<option value="60" >60 </option>'
		   +'<option value="70" >70 </option>'
		   +'<option value="80" >80</option>'
		   +'<option value="90" >90 </option>'
		   +'<option value="100" >100 </option>'
		   +'</select>'
		   +'</div>'
		   +'</div>'
		    +'<br>'
		    +'<br>'
	   +'<div class="row"  >'
	   +'<div class="col-sm-12" id="mimicbtnquesAns">'
	 +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="checkConfg"  ><b>SIMULATION</b></button>'
	   
	      +'</div>'
	      +'</div>'  
	    + '<div class="row"  id="CalculateActualFlow" hidden>'
	         +'<div class="col-sm-4">'
	         +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate frequency (Hz) : </label>'
	         +'</div>'
	         +'<div class="col-sm-5">'
	         +'<input type="text" id="ans" value="" style=margin:15px 10px;width:100%;"  class=" form-control" />'
	         +'</div>'
	         +'<div class="col-sm-3">'
	         +'<br><button type="submit" class="btn btn-danger" id="btnAnsCheck" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
	         +'</div>'
	         +'</div>'
//	         + '<div class="row"  id="identifyService " hidden>'
//	         +'<div class="col-sm-4">'
//	         +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Identify  Service : </label>'
//	         +'</div>'
//	         +'<div class="col-sm-5">'
//	         +'<input type="text" id="serviceAnswer" value="" style=margin:15px 10px;width:100%;"  class=" form-control" />'
//	         +'</div>'
//	         +'<div class="col-sm-3">'
//	         +'<br><button type="submit" class="btn btn-danger" id="servicebtn" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
//	         +'</div>'
//	         +'</div>'
	         
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
	    		
	      $("#main-div-conf").html(htm);
	
	$("#materialSelection").change(function(){
		materialValue1 =$("#materialSelection").children(":selected").attr("value");
//		   console.log("gfh" +materialValue1);
		if(materialValue1==0)
			{
				materialName="Water";
			}
		else if(materialValue1==1)
		{
			materialName="Milk";
		}
		else if(materialValue1==2)
		{
			materialName="Petrol";
		}
		else if(materialValue1==3)
		{
			materialName="Disel";
		}
		else if(materialValue1==4)
		{
			materialName="Honey";
		}
//		console.log("materialName"+materialName);	
	});
	$("#checkConfg").click(function(){
		$("#checkConfg").prop("disabled", true);
		$("#materialSelection").prop("disabled", true);
		$("#selectFlow").prop("disabled", true);
		   materialValue1 =$("#materialSelection").children(":selected").attr("value");
		   console.log("gfh" +materialValue1);
		   materialSelection2=$("#materialSelection").children(":selected").attr("id");
		   $("#materialSelection option[id="+materialSelection2+"]").attr("disabled",true);
		   
		   mimic(color,frequency,density);
		   
		   
	   });
	
	
	
	
		 $('#materialSelection').change(function(){
			 
			 materialValue=$("#materialSelection").children(":selected").attr("value");
			 if(materialValue==0)
				 {
				 	color="#b3b8ba";
				 	density=1000;
					  frequency=2800;
				 }
			 else  if(materialValue==1)
			 {
				 	color="#74CCF4";
				 	density=1033;
					  frequency=2780;
				 }
			 else  if(materialValue==2)
			 {
				 	color="#e9e5be";
				 	density=720;
					  frequency=3100;
				 }
			 else  if(materialValue==3)
			 {
				 	color="#31456a";
				 	density=830;
					  frequency=2970;
				 }
			 else  if(materialValue==4)
			 {
				 	color="#D1A745";
				 	density=1400;
					  frequency=2550;
				 }

			
		 });

		
	  var id=0;
	  $('#btnAnsCheck').click(function(){
		  // value 0 Water
			// value 1 Milk	  
			// value 2 Petrol
			// value 3 Disel
		  $("body").css("padding","0px 0px 0px 0px");
		 
		 
		  console.log("density "+density);
		  flow = $("#ans").val();
		  if(flow==""){
//			alert("Enter numeric value ");
			  $("#modelBody").css("color", "red");
			$("#modelBody").html("<b class='boldTextblue'>Enter numeric value</b> ");
			
		}
		else
			{
				if (id <= 3) {
					if (frequency == flow) {
						
						
						$("#CalculateActualFlow").prop("hidden", true);
						 $("#modelBody").css("color", "blue");
//						$("#servicebtn").prop("hidden", false);
						$("#modelBody").html("<b class='boldTextblue'>Take next service .</b>");
						 $("#ans").val("");
						addToMasterJson();
						tableCreate(masterJson);
						id=0;
						//event.stopPropagation();
					} else if (frequency != flow) {
						 $("#modelBody").css("color", "red");
//					alert("Entered value is incorrect.Try it again... ");
					$("#modelBody").html("<b class='boldTextRed'>Entered value is incorrect.Try it again...</b>");
					
					}


				} else if (id == 4) {
					 $("#modelBody").css("color", "blue");
					
					$("#modelBody").html("Refer Graph .");
					
					
				} else {
					flow = $("#ans").val();

					if (frequency == flow) {
						
						
						addToMasterJson();
						tableCreate(masterJson);
						$("#ans").val("");
						$("#CalculateActualFlow").prop("hidden", true);
						id=0;
						 $("#modelBody").css("color", "blue");
						$("#modelBody").html("<b class='boldTextblue'>Take next service .</b>");
						
					} else {
						
//						alert("correct answer is " + flow );
						 $("#modelBody").css("color", "green");
						$("#modelBody").html("<b class='boldTextblue'>correct answer is " + frequency+'</b>');
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
				
				arrayJson.push(tempJson);
				masterJson.demo = arrayJson;
				console.log(masterJson);
		  }
	  
}
