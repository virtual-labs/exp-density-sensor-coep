var masterJson1={};
var arrayJson1=[];
var materialName;
var color;
var density;
var frequency;
var T;
 var rahoDash;
 var appAttemptCounterT=1;
 var appAttemptCounterR=1;
 function mainPage1(){
	 var color;
	 	
	 	$("#canvas-div").html("<img src='images/tunningfork.png'></img>");
	 	function generateUniqueRandomArray(length, min, max) {
	 	    var randomArray = [];

	 	    while (randomArray.length < length) {
	 	      // Generate a random number between min and max
	 	      var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	 	      
	 	      // Check if the number is already in the array
	 	      if (!randomArray.includes(randomNumber)) {
	 	        randomArray.push(randomNumber);
	 	      }
	 	    }

	 	    return randomArray;
	 	  }

	 	  // Generate a unique random array with 5 numbers between 1 and 100
	 	  var myArray = generateUniqueRandomArray(5, 0, 4);
	 	  console.log(myArray);
	 	  
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
	   +'<option value="'+myArray[0]+' "  >Liquid-'+parseInt(myArray[0]+1)+'  </option>'
	   +'<option value="'+myArray[1]+' " >Liquid-'+parseInt(myArray[1]+1)+' </option>'
	   +'<option value="'+myArray[2]+' " >Liquid-'+parseInt(myArray[2]+1)+'  </option>'
	   +'<option value="'+myArray[3]+' " >Liquid-'+parseInt(myArray[3]+1)+' </option>'
	   +'<option value="'+myArray[4]+' " >Liquid-'+parseInt(myArray[4]+1)+' </option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	    +'<br>'
	     
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
	         +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;">Calculate Density (&rho;)  : </label>'
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
	    		
			 $("#centerText1").html("APPLICATION");
	      $("#main-div-conf").html(htm);
	 	 var tempFrq=0; 
			var frqWithError=0;
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
				  randomSquence();
				  console.log(" frqWithError "+frqWithError);
				  mimic(color,frqWithError,density,materialName);
				 
//				  $("#CalculateActualFlow2").prop("hidden",false);
//					$("#densityName").html("Density of Selected liquid service : "+density+" kg/m3");
				  
			 }
		 else  if(materialValue==1)
		 {
			 	color="#b3b8ba";
			 	density="1033";
				  frequency="2714";
				  T="368.448";
				  rahoDash="1032";
				  materialName="Milk";
				  randomSquence();
				  console.log(" frqWithError "+frqWithError);
				  mimic(color,frqWithError,density,materialName);
				 
//					$("#CalculateActualFlow2").prop("hidden",false);
//					$("#densityName").html("Density of Selected liquid service : "+density+" kg/m3");
					
					
					
			 }
		 else  if(materialValue==2)
		 {
			 	color="#e9e5be";
			 	density=730;
				  frequency="2841";
				  T="351.989";
				  rahoDash="729.99125";
				  materialName="Petrol";
				  randomSquence();
				  console.log(" frqWithError "+frqWithError);
				  mimic(color,frqWithError,density,materialName);
				 
//				  $("##CalculateActualFlow2").prop("hidden",false);
//					$("#densityName").html("Density of Selected liquid service : "+density+" kg/m3");
				  
				  
			 }
		 else  if(materialValue==3)
		 {
			 	color="#31456a";
			 	density="830";
				  frequency="2794";
				  T="357.861";
				  rahoDash="830";
				  materialName="Diesel";
				  randomSquence();
				  console.log(" frqWithError "+frqWithError);
//				  $("#CalculateActualFlow2").prop("hidden",false);
				  mimic(color,frqWithError,density,materialName);
				  

//				  $("#CalculateActualFlow2").prop("hidden",false);
//					$("#densityName").html("Density of Selected liquid service : "+density+" kg/m3");
				  
			 }
		 else  if(materialValue==4)
		 {
			 	color="#D1A745";
			 	density="1400";
				  frequency="2585";
				  T="386.844";
				  rahoDash="1399.990";
				  materialName="Honey";
				  randomSquence();
				  console.log(" frqWithError "+frqWithError);
				  mimic(color,frqWithError,density,materialName);
				

//				  $("#CalculateActualFlow2").prop("hidden",false);
//					$("#densityName").html("Density of Selected liquid service : "+density+" kg/m3");
				  
			 }else{
				
				 $("#CalculateActualFlow2").prop("hidden",true);
				 $("#densityDiv").prop("hidden",false);
					$("#densityName").html("<b style='font-size: 17px;color: red;font-weight: bolder;'>Select liquid service.</b>");
					$("#materialSelection").prop("disabled", false);
			 }
		 

		
	});
	function randomSquence()
	{frqWithError=0;
		function getRandomInt(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		let randomInt = getRandomInt(1, 2); // Generates a random integer between 1 and 2
		console.log(randomInt);
		if(randomInt==1){
			console.log("plus error add 0.1% ");
			 tempFrq=(parseInt(frequency)*0.1/100);
			 frqWithError=parseInt(frequency)+parseInt(tempFrq);
		}
		else if(randomInt==2)
			{
			console.log("minus error 0.1% ");
			 tempFrq=(parseInt(frequency)*0.1/100);
		 frqWithError=parseInt(frequency)-parseInt(tempFrq);
			}
		console.log("frqWithError"+frqWithError);
	}	
	
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
	
	  var rahoDash=0;
	 
	  var id=0;
	  var t1=0;
	  $('#btnAnsCheck2').click(function(){
		  // value 0 Water
			// value 1 Milk	  
			// value 2 Petrol
			// value 3 Disel
		  $("#modelBody").css("font-size", "20px");
		  $("body").css("padding","0px 0px 0px 0px");
		 
		  var temp=parseFloat(1/frqWithError);
		  var temp1=temp*(Math.pow(10,6));
	          t1  =temp1.toFixed(3);
		  console.log("T1 "+t1);
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
					if (t1 == flow) {
					
						
						 $("#modelBody").css("color", "blue");
						$("#msgName").html("Message Box");
						$("#modelBody").html("<b class='boldTextblue'>Calculate rho(&#961;) </b>");
						$("#CalculateActualFlow3").prop("hidden", false);
						$("#ans1,#btnAnsCheck2").prop("disabled", true);
						
						id=0;
						
					} else if (t1 != flow) {
						 $("#modelBody").css("color", "red");
					$("#msgName").html("Message Box");
					$("#modelBody").html("<b class='boldTextRed'>Entered value is incorrect.Try it again.</b>");
					appAttemptCounterT++;
					}


				} else if (id == 4) {
					 $("#modelBody").css("color", "#621b1b");
					$("#msgName").html("Formula");
					$("#modelBody").html("<img class='img-responsive' src='images/tFormula.png'></img> <br><b>f = Calculated Frequency.  </b>");
					appAttemptCounterT++;
					
				} else {
					flow = $("#ans1").val();

					if (t1 == flow) {
						id=0;
					    $("#ans1,#btnAnsCheck2").prop("disabled", true);
						$("#msgName").html("Message Box");
						 $("#modelBody").css("color", "#621b1b");
						 $("#modelBody").html("<b class='boldTextblue'>Calculate rho(&#961;) </b>");
							$("#CalculateActualFlow3").prop("hidden", false);
	
					} else {
						
//						alert("correct answer is " + flow );
						 $("#modelBody").css("color", "green");
						 $("#msgName").html("Message Box");
						$("#modelBody").html("<b class='boldTextblue'>Correct answer is " + t1+'</b>');
						appAttemptCounterT++;
					}
				}
				id++;
	
			} 
	  });
	  var id=0;
	  var m0;
	  var m1;
	  var m2;
	  var calFrq=0;
	  $('#btnAnsCheck3').click(function(){
		  var m0="-2500.6773";
		  var m1="-0.2756";
		  var m2="0.02677";
		  // value 0 Water
			// value 1 Milk	  
			// value 2 Petrol
//		  alert("drghiuhgdugh");
			// value 3 Disel
		  $("#modelBody").css("font-size", "20px");
		  $("body").css("padding","0px 0px 0px 0px");
//		  var temp=Math.pow(10, -6);
//		 finalAns1=(1/(T*(Math.pow(10, -6))));
//		 finalAns=1;
		  var m0=parseFloat(m0);
		  var m1=parseFloat(m1);
		  var m2=parseFloat(m2);
		  var temppow=Math.pow(t1,2);
		 var temp=m0 + (m1 * t1) + (m2 * temppow);
		 finalAns=Math.round(temp);
		 console.log("finalAns "+finalAns);
		  flow = $("#ans3").val();
		  if(flow=="" || isAlphabetical(flow)){
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
						 $('#materialSelection').prop('disabled', false);
						addToMasterJson1();
						tableCreate1(masterJson1);
					
					} else if (finalAns != flow) {
						 $("#modelBody").css("color", "red");
					$("#msgName").html("Message Box");
					$("#modelBody").html("<b class='boldTextRed'>Entered value is incorrect.Try it again.</b>");
					appAttemptCounterR++;
					}


				} else if (id == 4) {
					 $("#modelBody").css("color", "#621b1b");
					$("#msgName").html("Formula");
					$("#modelBody").html("<img class='img-responsive' src='images/rhofurmula.png'></img>");
					appAttemptCounterR++;
				} 
				else {
					flow = $("#ans3").val();

					if (finalAns == flow) {
						
						id=0;
						calFrq=finalAns;
						$("#ans3,#btnAnsCheck3").prop("disabled", true);
						$("#CalculateActualFlow2,#CalculateActualFlow3").prop("hidden", true);
						$("#msgName").html("Message Box");
						$("#modelBody").css("color", "#621b1b");
						$("#modelBody").html("<b class='boldTextblue'>Select another liquid service.</b>");
						 $('#materialSelection').prop('disabled', false);
						addToMasterJson1();
						tableCreate1(masterJson1);
						
						
					} else {
						appAttemptCounterR++;
//						alert("correct answer is " + flow );
						 $("#modelBody").css("color", "green");
						 $("#msgName").html("Message Box");
						$("#modelBody").html("<b class='boldTextblue'>Correct answer is " + finalAns+'</b>');
					}
				}
				id++;
	
			} 
	  });

		function addToMasterJson1()
		  {
			  tempJson={};	
				tempJson.Servicetype=materialName;
				tempJson.frqWithError1 = frqWithError;
				tempJson.t1 = t1;
				tempJson.rahoDash = finalAns;
				arrayJson1.push(tempJson);
				masterJson1.demo = arrayJson1;
				console.log(masterJson1);
				resultMasterJson.appAttemptCounterR=appAttemptCounterR;
				resultMasterJson.appAttemptCounterT=appAttemptCounterT;
				console.log(resultMasterJson);
				
		  }
	  
}
