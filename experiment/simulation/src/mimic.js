
 function mimic (color ,frequency,density){
//	console.log("Hello");
	$('#canvas-div').html("");
	$('#centerText2').html("MIMIC");
    $('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w = 900;
	var h = 800;
	 
	var width = $(window).width();
	
	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '80%', '80%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else{
		paper = new Raphael(document.getElementById('canvas-div'), '80%', '80%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
	x=500;
	y=50;
	var width = 200;
	var height = 200;
	
	var color=color;
	
    var x1=150;
    var y1=150;
    var time=100;
    var time1=10;
	var	counter=0;
    pipeDesign();
  var   t1= paper.text(x1+325, 115,'0').attr({"font-size":25,"fill":"#DFFF00","stroke-width":10,"font-weight":"bold",'font-family':'digital-clock-font','font-size': 20});  
  var t2= paper.text(x1+450, 115,'frequency (Hz)').attr({"font-size":15,"fill":"#000","stroke-width":10});   
  function pipeDesign()
    {
    	console.log("pipeDesign");
    	var tunning = paper.image("images/tunning.jpg", 452, 320,49, 100);	
    	
    	var meter = paper.image("images/meterfina1lPreview.png", 384, 25,180, 350);	
    	var circle=paper.circle(x1+327,y1-35,60).attr({'stroke-width':'10','stroke':'#5484a5','fill':'#363636'});
    	
    	var stop=paper.circle(x1+340,y1-0,2).attr({'stroke-width':'2','stroke':'red','fill':'red', opacity : 50 });
    	
    	
    	var start=paper.circle(x1+310,y1-0,5).attr({'stroke-width':'5','stroke':'green','fill':'green', opacity :100 });
    	var counterRect = paper.rect(x1+292, 95, 70, 40) .attr({'stroke' : '#999' , 'stroke-width' :3,'fill-color':'red'});
    	var pipe = paper.rect(x1+50, y1+140, 570, 200) .attr({'stroke' : '#999' , 'stroke-width' : 15});    	
    	var arr = [];	
    	tunning.toBack();
		arr[0]=paper.path('M' +(x1+55)+ ' ' +(y1+240)+ 'l 20 0 ').attr({'stroke': color,'stroke-width':185, 'stroke-opacity': 0.4});
		arr[0].animate({path :'M' +(x1+55)+ ' ' +(y1+240)+ 'l 298 0 '},time, function(){
			
		tunning.remove();
		var tunning1 = paper.image("images/t.gif", 402, 260,150, 160).rotate(180);
		meter.toFront();
		pipe.toFront();
		counterRect.toFront();
		t1.toFront();
		myTimer = setInterval(function(){
			start.attr({'opacity':0});
			if(counter-1==frequency){
				tunning1.remove();
				$("#checkConfg").prop('disabled',false);
				
				$("#materialSelection").prop("disabled", false);
				$("#selectFlow").prop("disabled", false);
				tunning2 = paper.image("images/tunning-removebg-preview.png", 452, 320,49, 100);
				tunning2.toBack();
				clearInterval(myTimer);
//				AnswerPanel();
				$("#CalculateActualFlow2").prop("hidden", false);
				start.attr({opacity: 10,'stroke-width':'2',"fill":"#3CB371"});
				stop.attr({opacity: 100,'stroke-width':'8',"fill":"red"});
			}
			else{	
			t1.attr('text',counter);
			counter++;
//			console.log(" Counter= "+counter);
			start.attr({opacity: 100,'stroke-width':'5'});
			stop.attr({opacity: 50,'stroke-width':'2',"fill":"#FAA0A0"});
			}
		},time1/60);
		arr[0]=paper.path('M' +(x1+353)+ ' ' +(y1+240)+ 'l 20 0 ').attr({'stroke': color,'stroke-width':185, 'stroke-opacity': 0.4});
		arr[0].animate({path :'M' +(x1+353)+ ' ' +(y1+240)+ 'l 259 0 '},time, function(){
		});
		});
		
   } 
    
}
 
