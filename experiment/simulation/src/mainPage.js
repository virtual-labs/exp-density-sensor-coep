	arrayJson=[];
masterJson={};
materialValue1=0;	
var density=0;
var frequency=0;
var T=0;
var rahoDash=0;
var materialName="";
////mainpage function
 function mainPage (){
	 var color;
	var htm=''
	
	  +'<div class="row" >'
	   +'<center style="font-size: 20px;font-weight: normal;margin-left:15px;color:#621b1b;"><b>Tunning fork design parameters</b></center>'
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
	 
		    
	   +'<div class="row"  >'
	   +'<div class="col-sm-12" id="mimicbtnquesAns">'
	 +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="checkConfg"  ><b>SIMULATION</b></button>'
	   
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
	    + '<div class="row"  id="CalculateActualFlow1" hidden>'
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
		$("#checkConfg").prop("disabled", false);
	});
	$("#checkConfg").click(function(){
		$("#checkConfg").prop("disabled", true);
		$("#materialSelection").prop("disabled", true);
		$("#selectFlow").prop("disabled", true);
		$("#ans1").val(" ");
		$("#ans").val(" ");
		   materialValue1 =$("#materialSelection").children(":selected").attr("value");
		   console.log("gfh" +materialValue1);
		   materialSelection2=$("#materialSelection").children(":selected").attr("id");
		   $("#materialSelection option[id="+materialSelection2+"]").attr("disabled",true);
		   $("#ans,#btnAnsCheck1,#ans1,#btnAnsCheck2").prop("disabled", false);
		   mimic(color,frequency,density);
		   
		   
	   });
	
	
	
	
		 $('#materialSelection').change(function(){
			 
			 materialValue=$("#materialSelection").children(":selected").attr("value");
			 if(materialValue==0)
				 {
				 	color="#74CCF4";
				 	density=1000;
					  frequency=2800;
					  T=366.645;
					  rahoDash=998.003;
					  
				 }
			 else  if(materialValue==1)
			 {
				 	color="#b3b8ba";
				 	density=1033;
					  frequency=2780;
					  T=368.448;
					  rahoDash=1032;
				 }
			 else  if(materialValue==2)
			 {
				 	color="#e9e5be";
				 	density=730;
					  frequency=3100;
					  T=351.989;
					  rahoDash=729.99125;
				 }
			 else  if(materialValue==3)
			 {
				 	color="#31456a";
				 	density=830;
					  frequency=2970;
					  T=357.861;
					  rahoDash=830;
				 }
			 else  if(materialValue==4)
			 {
				 	color="#D1A745";
				 	density=1400;
					  frequency=2550;
					  T=386.844;
					  rahoDash=1399.990;
				 }

			
		 });

		
	  var id=0;
	  $('#btnAnsCheck1').click(function(){
		  
		  $("body").css("padding","0px 0px 0px 0px");
		 var rahoDashPluse=rahoDash+1;
		 var rahoDashMinus=rahoDash-1;
		  console.log("rahoDashPluse "+rahoDashPluse);
		  console.log("rahoDashMinus "+rahoDashMinus);
		  flow = $("#ans").val();
		  if(flow==""){
//			alert("Enter numeric value ");
			  $("#modelBody").css("color", "red");
			$("#modelBody").html("<b class='boldTextblue'>Enter numeric value.</b> ");
			
		}
		else
			{
				if (id <= 3) {
					flow = $("#ans").val();

					if ( rahoDashMinus<= flow && rahoDashPluse >= flow) {
						
//						$("#CalculateActualFlow2").prop("hidden", false);
						$("#CalculateActualFlow1").prop("hidden", true);
						   $("#CalculateActualFlow2").prop("hidden", true);
						   $("#checkConfg").prop("disabled", true);
				         $("#modelBody").css("color", "blue");
						$("#modelBody").html("<b class='boldTextblue'>Select Next Service.</b>");
						 $("#ans,#btnAnsCheck1").prop("disabled", true);
						id=0;
						tableCreate(masterJson);
						$("#ans1").val(" ");
						$("#ans").val(" ");
					}
					else{
						 $("#modelBody").css("color", "red");
							$("#modelBody").html("<b class='boldTextblue'>Entered value is incorrect.Try it again.</b>");
							
					}
				} else if (id == 4) {
					 $("#modelBody").css("color", "blue");
					
					$("#modelBody").html("<img class='img-responsive' src='images/rhofurmula.png'></img>");
					
					
				} else {
					flow = $("#ans").val();

					if (rahoDashMinus<= flow && rahoDashPluse >= flow) {
						
//						$("#CalculateActualFlow2").prop("hidden", false);
						
						$("#CalculateActualFlow1").prop("hidden", true);
						   $("#CalculateActualFlow2").prop("hidden", true);
//						$("#ans,#btnAnsCheck1").prop("disabled", true);
						   $("#checkConfg").prop("disabled", true);
						   tableCreate(masterJson);
						   
							$("#ans1").val(" ");
							$("#ans").val(" ");
						id=0;
						 $("#modelBody").css("color", "blue");
						$("#modelBody").html("<b class='boldTextblue'>Select Next Service.</b>");
						
					} else {
						
//						alert("correct answer is " + flow );
						 $("#modelBody").css("color", "green");
						$("#modelBody").html("<b class='boldTextblue'>Correct answer is " + rahoDash+'</b>');
					}
				}
				id++;
	
			} 
	  });
	  var id=0;
	  $('#btnAnsCheck2').click(function(){
		  // value 0 Water
			// value 1 Milk	  
			// value 2 Petrol
			// value 3 Disel
		  $("body").css("padding","0px 0px 0px 0px");
		  console.log("T "+T);
		  flow = $("#ans1").val();
		  if(flow==""){
//			alert("Enter numeric value ");
			  $("#modelBody").css("color", "red");
			$("#modelBody").html("<b class='boldTextblue'>Enter numeric value</b> ");
			
		}
		else
			{
				if (id <= 3) {
					if (T == flow) {
					
						
						 $("#modelBody").css("color", "blue");
						
						$("#modelBody").html("<b class='boldTextblue'>Calculate rho ( &#120588; ) </b>");
						$("#CalculateActualFlow1").prop("hidden", false);
						addToMasterJson();
						
						$("#ans1,#btnAnsCheck2").prop("disabled", true);
						
						id=0;
						
					} else if (T != flow) {
						 $("#modelBody").css("color", "red");

					$("#modelBody").html("<b class='boldTextRed'>Entered value is incorrect.Try it again.</b>");
					
					}


				} else if (id == 4) {
					 $("#modelBody").css("color", "blue");
					
					$("#modelBody").html("<img class='img-responsive' src='images/qe.png'></img> ");
					
					
				} else {
					flow = $("#ans1").val();

					if (T == flow) {
						
					
						$("#ans1,#btnAnsCheck2").prop("disabled", true);
						$("#CalculateActualFlow1").prop("hidden", false);
						id=0;
						 $("#modelBody").css("color", "blue");
						$("#modelBody").html("<b class='boldTextblue'>Calculate rho( &#120588; )</b>");
						addToMasterJson();
//						tableCreate(masterJson);
						
						
					} else {
						
//						alert("correct answer is " + flow );
						 $("#modelBody").css("color", "green");
						$("#modelBody").html("<b class='boldTextblue'>Correct answer is " + T+'</b>');
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
				tempJson.rahoDash = rahoDash;
				arrayJson.push(tempJson);
				masterJson.demo = arrayJson;
				console.log(masterJson);
		  }
	  
}
