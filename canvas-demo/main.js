var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var iconMarks = 'smallPen';
var colorMarks = 'black';
//var colorMark = false;
var eraserMark = false;
autoCanvasSize();
window.onresize = function(){
	autoCanvasSize();
}	

listenMouse();


listenIcon();

listenColors();

function listenColors(){
	const range = document.getElementById('colors');
	const colors = Array.from(range.querySelectorAll('.color'));
	colors.forEach(color => color.onclick = function(event){
		var activeBefore = Array.from(range.querySelectorAll(".active"));
		activeBefore[0].classList.remove('active');	
		var colorRangle = event.target;
		colorRangle.classList.add('active');
		colorMarks = colorRangle.id;
		//colorMark = true;
		chooseofColor(colorMarks);
	})
}

function chooseofColor(color){
	switch(color){
		case 'red':
			context.strokeStyle = '#ff377b';
			break
		case 'yellow':
			context.strokeStyle = '#ffff5b';
			break
		case 'blue':
			context.strokeStyle = '#5b5be0';
			break
		default:
			context.strokeStyle = 'black';

	}	
}


function listenIcon(){
	const icons = Array.from(document.querySelectorAll(".icon"));
	icons.forEach(icon => icon.onclick = function(event){
		var activeBefore = Array.from(document.querySelectorAll(".active"));
		activeBefore[0].classList.remove('active');
		var svg = event.target;
		svg.classList.add('active');
		iconMarks = svg.id;
		degreeofPen(iconMarks);
	})

	const iconClear = document.getElementById('clear');
	const download = document.getElementById('download');
	iconClear.onclick = function(event){
		var svg = event.target;
		svg.classList.add('active');
		autoCanvasSize();

	}
	download.onclick = function(event){
		var svg = event.target;
		svg.classList.add('active');
		var url = canvas.toDataURL("image/png");
		var a = document.createElement('a');
		document.body.appendChild(a);
		a.href = url;
		a.download = 'myPicture';
		a.target = '_blank';
		a.click();
	}

	iconClear.addEventListener('transitionend',removeTransition);
	download.addEventListener('transitionend',removeAndDownload);
}

function removeAndDownload(e){
	var svg = e.target;
	if (e.propertyName !== 'transform') return;
    svg.classList.remove('active'); 		

}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
    e.target.classList.remove('active'); 
    var activeBefore = Array.from(document.querySelectorAll(".active"));
    degreeofPen(activeBefore[0].id);
  }

function listenMouse(){
	var drawMark = false;
	var lastLocation = {
		x : undefined,
		y : undefined
	};

	canvas.onmousedown = function (event) {
			drawMark = true;
			lastLocation.x = event.clientX;
			lastLocation.y = event.clientY;
	  }

	canvas.onmousemove = function(event){
			if (drawMark) {


				
				if (eraserMark){
					context.strokeStyle = 'white';context.lineWidth =20;
				}else
				{
					const range = document.getElementById('colors');
					var activeBefore = Array.from(range.querySelectorAll(".active"));
					chooseofColor(activeBefore[0].id);
				}


				var clientX = event.clientX;
				var clientY = event.clientY;
				context.beginPath();
				context.moveTo(lastLocation.x,lastLocation.y);
				context.lineCap = 'round'; //adviod the dis-smooth line
				context.lineTo(clientX,clientY);
				context.stroke();
				context.closePath();
				lastLocation.x = clientX;
				lastLocation.y = clientY;		
			}
			
	}

	canvas.onmouseup = function(event){
			drawMark = false;
	}
}


function degreeofPen(degree){
	switch(degree){
		case "pen":
			eraserMark = false;
			context.lineWidth = 5;
			break
		case "bigpen":
			eraserMark = false;context.lineWidth = 10;
			break
		case "eraser":
			eraserMark = true;
			break
		default:
			eraserMark = false;context.lineWidth = 1;

	}
}







function autoCanvasSize(){
	var viewWidth = document.documentElement.clientWidth;
	var viewHeight = document.documentElement.clientHeight;
	canvas.width = viewWidth;
	canvas.height = viewHeight;
	context.fillStyle = 'white';		
	context.fillRect(0,0,viewWidth,viewHeight);
}